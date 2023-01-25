---
sidebar_position: 3
---
# Type System and Defining Custom Types

## Algebraic Datatypes

Haskell has a system called `algebraic datatypes` for defining new types. 

```haskell
data Bool = True | False
data Ordering = LT | EQ | GT
```

You can also define types with this syntax:

```haskell
data Color = Red | Green | Blue

-- a function that uses pattern matching on our new type
rgb :: Color -> [Double]
rgb Red = [1,0,0]
rgb Green = [0,1,0]
rgb Blue = [0,0,1]
```

Types like that just list a bunch of constants, which are called `enumerations` or `enums` in Haskell. 

Each datatype can be a sum of constructors, and each constructor is a product of fields. We can count the possible values of each type this way:

```haskell
data Bool = True | False            -- corresponds to 1+1. Has 2 possible values.
data TwoBools = TwoBools Bool Bool  -- corresponds to Bool*Bool, i.e. 2*2. Has 4 possible values.
data Complex = Two Bool Bool | One Bool | None
                                    -- corresponds to Bool*Bool+Bool+1 = 2*2+2+1 = 7. Has 7 possible values.
```

### Fields

You need other types as well. For example, to define a type for reports containing an id number, a title, and a body, you can use:

```haskell
data Report = ConstructReport Int String String
```

To create it, you should use:

```haskell
Prelude> :t ConstructReport 1 "Title" "This is the body."
ConstructReport 1 "Title" "This is the body." :: Report
```

You can also access the fields with pattern matching:

```haskell
reportContents :: Report -> String
reportContents (ConstructReport id title contents) = contents
setReportContents :: String -> Report -> Report
setReportContents contents (ConstructReport id title _contents) = ConstructReport id title contents
```

### Constructors

The things on the right hand side of a `data` declaration are called constructors. A type can have multiple constructors and a constructor can have zero or more fields.

```haskell
data Card = Joker | Heart Int | Club Int | Spade Int | Diamond Int
```

### Deriving

To Tell Haskell how to print the types you defined, you should add a `deriving Show` after the type definition:

```haskell
data Card = Joker | Heart Int | Club Int | Spade Int | Diamond Int
  deriving Show
```

## Type Parameters

### Defining Parameterized Types

This is our first own parameterized type `Descripbed`, which values `Described a` contain a value of type `a` and a `String` description.

```haskell
data Described a = Describe a String

getValue :: Described a -> a
getValue (Describe x _) = x

getDescription :: Described a -> String
getDescription (Describe _ desc) = desc
```

### Syntactic Note

The rules for Haskell identifiers are:

* Type variables and names for functions and values start lower case.
* Type names and constructor names start with upper case.

### Multiple Type Parameters

Types can have multiple type parameters:

```haskell
data Either a b = Left a | Right b
```

## Recursive Types

Just lke Haskell functions, Haskell data types can be `recursive`. This is how you define a list of integers:

```haskell
data IntList = Empty | Node Int IntList
  deriving Show

ihead :: IntList -> Int
ihead (Node i _) = i

itail :: IntList -> IntList
itail (Node _ t) = t

ilength :: IntList -> Int
ilength Empty = 0
ilength (Node _ t) = 1 + ilength t
```

We can use the functions defined above to work with lists of integers:

```haskell
Prelude> ihead (Node 3 (Node 5 (Node 4 Empty)))
3
Prelude> itail (Node 3 (Node 5 (Node 4 Empty)))
Node 5 (Node 4 Empty)
Prelude> ilength (Node 3 (Node 5 (Node 4 Empty)))
3
```

To be able to put any type of element in our list, you can use:

```haskell
data List a = Empty | Node a (List a)
  deriving Show
```

## Record Syntax

Haskell has a feature called `record syntax` that is helper for you to get value from those fields, so you don't need to remember the order of each parameter.

```haskell
data Person = MkPerson { name :: String, age :: Int, town :: String, state :: String, profession :: String}
  deriving Show
```

You can both define values of `Person` normally or using record syntax:

```haskell
Prelude> MkPerson "Jane Doe" 21 "Houston" "Texas" "Engineer"
MkPerson {name = "Jane Doe", age = 21, town = "Houston", state = "Texas", profession = "Engineer"}

Prelude> MkPerson {name = "Jane Doe", town = "Houston", profession = "Engineer", state = "Texas", age = 21}
MkPerson {name = "Jane Doe", age = 21, town = "Houston", state = "Texas", profession = "Engineer"}
```

You are free to get accesoor functions for the fields.

```haskell
Prelude> :t profession
profession :: Person -> String
Prelude> profession (MkPerson "Jane Doe" 21 "Houston" "Texas" "Engineer")
"Engineer"
```

## Other Ways of Defining Types

In addition to the `data` keyword, there are two additional ways of defining types in Haskell.

The `newtype` keyword works like `data`, but you can only have a single constructor with a single field.

The `type` keyword introduces a type alias. 
