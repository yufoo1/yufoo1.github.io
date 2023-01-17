---
sidebar_position: 5
---

# Demo of Backend Development Using Gin

Now is just list of the code simply, all of the examples in it are the ones I actually used in my project. The follow-up will be added to introduce some more advanced usage, such as calling Ali Cloud API, WebSocket, etc.

## Create Your First Route

```go
package main

import (
    "github.com/gin-gonic/gin"
)

func main() {
    r := gin.Default()
    r.GET("/", func(c *gin.Context) {
        c.String(http.StatusOK, "Hello World")
    })
    r.Run(":8080")
}
```

Through the example above, you can create your first route and visit it in browser by `localhost:8080`.

## Cross-Domain

```go
func Cors() gin.HandlerFunc {
	return func(c *gin.Context) {
		method := c.Request.Method
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, UPDATE")
		c.Header("Access-Control-Allow-Headers", "*")
		c.Header("Access-Control-Expose-Headers", "Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Cache-Control, Content-Language, Content-Type")
		c.Header("Access-Control-Allow-Credentials", "true")
		if method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
		}
		c.Next()
	}
}
```

## Connect MySQL and CRUD

```go
func ConnectMysql() {
	loginReq := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s",
		global.MysqlUsername,
		global.MysqlPassword,
		global.MysqlHost,
		global.MysqlPort,
		global.MysqlDatabase)
	database, err := sqlx.Open("mysql", loginReq)
	if err != nil {
		fmt.Println("Connect MySQL Failed,", err)
		return
	} else {
		fmt.Println("Connect MySQL Successfully")
	}
	global.MysqlDb = database
}

// Query
err = global.MysqlDb.Select(&idArr, "select id from user_login where username=?", username)

// Insert
r, err := global.MysqlDb.Exec("insert into user_login(username, password, phone)values(?, ?, ?)", username, password, phone)

// Delete
r, err := global.MysqlDb.Exec("delete from user_login where username=?", username)

// Update
r, err = global.MysqlDb.Exec("update user_login set username=? where id=?", username, id)
```

## Connect MongoDB and CRUD

```go
// Connect
func ConnectMongodb() {
	c, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	uri := fmt.Sprintf(
		"mongodb://%s:%s@%s:%d/dedeket?authMechanism=SCRAM-SHA-256&ssl=false",
		global.MongodbUsername,
		global.MongodbPassword,
		global.MongodbHost,
		global.MongodbPort,
	)
	client, err := mongo.Connect(
		c,
		options.Client().ApplyURI(uri),
	)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("Connect MongoDB Successfully")
	}
	global.MongoDb = client.Database(global.MongodbDatabase)
}

type TextbookComment struct {
	TextbookId string `bson:"textbookId"`
	Sender     string `bson:"sender"`
	Comment    string `bson:"comment"`
	CreatedAt  string `bson:"createdAt"`
}

func (TextbookComment) CollectionName() string {
	return "user_textbook_comment"
}

// Insert One
func InsertOneTextbookComment(textbookComment *TextbookComment) {
	_, err := global.MongoDb.Collection(TextbookComment{}.CollectionName()).InsertOne(context.Background(), textbookComment)
	if err != nil {
		fmt.Println(err)
	}
}

// Delete
func DeleteTextbookAllComment(textbookId string) {
	_, err := global.MongoDb.Collection(TextbookComment{}.CollectionName()).DeleteMany(context.Background(), bson.M{"textbookId": textbookId})
	if err != nil {
		fmt.Println(err)
	}
}
```

## Connect Redis and CRUD

```go
// Connect
func ConnectRedis() {
	global.RedisDb = redis.NewClient(&redis.Options{
		Addr:     global.RedisAddr,
		Password: global.RedisPassword,
		DB:       global.RedisDatabase,
	})
	fmt.Println("Connect Redis Successfully")
}

// Set
global.RedisDb.Set(c, "username", username, time.Minute*15)

// Delete
global.RedisDb.Del(c, "username")

// Get
username, err := global.RedisDb.Get(c, "username").Result()
```

## Connect OSS and CRUD

```go
func ConnectOss() {
 client, err := oss.New(global.OssEndpoint, global.OssAccessKeyId, global.OssAccessKeySecret)
 if err != nil {
  fmt.Println(err)
 }
 bucket, err := client.Bucket(global.OssBucketName)
 if err != nil {
  fmt.Println(err)
 }
 global.OssBucket = bucket
 fmt.Println("Connect OSS Successfully")
}

// Insert or update
err = global.OssBucket.PutObjectFromFile("TARGET PATH IN OSS", "LOCAL PATH")
```
