# Nginx Simple Guide

Nginx has one master process and several worker processes. The master process is to read, evaluate configuration and maintain worker processes. Worker processes are used to do actual processing of requests. The way nginx and tis modules work is determined in the configuration file. By default, it is named `nginx.conf` and placed in the directory `/usr/local/nginx/conf`, `/etc/nginx`, or `/usr/local/etc/nginx`.

## Start, Stop and Reload

Once nginx is started, it can be controlled with the `-s` parameter, like `nginx -s <signal>`, where `signal` may be:

* stop: fast shutdown
* quit: graceful shutdown
* reload: reloading the configuration file
* reopen: reopening the log files

To get the list of all running nginx processes, you can use `ps -ax | grep nginx`, then `kill -s QUIT <ID>` can also be used to stop nginx processes.

## Structure of Configuration File

Nginx consists of modules that are controlled by directives specified in the configuration file. Directives are divided into simple directives and block directives. A simple directive consists of the name and parameters separated by spaces and ands with a semicolon; A block directive has the same structure as a simple directive, but ends with a set of additional instructions surrounded by braces. If a block directive can have other directives inside braces, it is called a context. Directives placed in the configuration file outside of any contexts are considered to be in the `main` context. The rest of a line after the `#` sign is considered a comment.

## Serving Static Content

This part shows that how to serve out files, such as images or static `HTML` pages, which requires editing of the configuration file.

Assumed that `HTML` pages are placed at `/data/www` directory and there is an `index.html` file with any text content into it, Some images are placed in the `/data/images` directory. Generally, the configuration file may include several `server` blocks distinguished by ports on which the listen to and by server names. Once nginx decides which server processes a request, it tests the `URI` specified in the request's header against the parameters of the `location` directives defined inside the `server` block.

To serve `HTML` pages, add the following `location` block to the `server` block:

```nginx
location / {
    root /data/www;
}
```

This `location` block specifies the `/` prefix compared with the `URI` from the request. For matching requests, the `URI` will be added to the path specified in the `root` directive, like `/data/www`, to form the path to requested file on the local file system.

If there are several matching `location` blocks, nginx will select the one with the longest preifx.

To serve images, add the following `location` block:

```nginx
location /images/ {
    root /data;
}
```

To apply the new configuration, start nginx if it is not started or reload it with `nginx -s reload`. It seems `nginx -s stop && nginx -c <path>` won't reload the configuration. Sometimes, you should also clear cache of browser to make sure changes take effect.

If you want to visit it through `IP` address of your server, remember to add the `IP` address to `server_name` in `server` block.

> When there is something does not work as expected, you can try to find out the reason in `access.log` and `error.log` files in the directory `/usr/local/nginx/logs` or `/var/log/nginx`.

## Setting Up Simple Proxy Server

To set nginx up as a proxy server, which can receive requests, pass them to the proxied servers, retrieves responses from them, and sends them to the clients. When nginx selects a `location` block to serve a request, it first checks location directives that with longest prefix, and then checks regular expressions. A regular expression should be proceded with `~`. 

```nginx
server {
    location / {
        proxy_pass http://localhost:8080/;
    }
    
    location ~ \.(gif|jpg|png)$ {
        root /data/images;
    }
}
```

This server will filter requests ending with `.git`, `.jpg`, or `.png` and map them to the `/data/images` directory.

There are some common examples about passing proxy, assumed that access address is `http://localhost/proxy/test.html`:

*  ```nginx
   location /proxy/ {
       proxy_pass http://127.0.0.1:8080/
   }
   ```

  Agent to `http://127.0.0.1:8080/test.html`.

* ```nginx
  location /proxy/ {
  	proxy_pass http://127.0.0.1:8080;
  }
  ```

  Agent to `http://127.0.0.1:8080/proxy/test.html`.

* ```nginx
  location /proxy/ {
      proxy_pass http://127.0.0.1:8080/api;
  }
  ```

  Agent to `http://127.0.0.1:8080/apitest.html`.

* ```nginx
  location /proxy {
      proxy_pass http://127.0.0.1:8080/api;
  }
  ```

  Agent to `http://127.0.0.1:8080/api/test.html`.

* ```nginx
  location /proxy {
      proxy_pass http://127.0.0.1:8080/
  }
  ```

  Agent to `http://127.0.0.1:8080//test.html`.

* ```nginx
  location /proxy {
      proxy_pass http://127.0.0.1:8080;
  }
  ```

  Agent to `http://127.0.0.1:8080/proxy/test.html`.