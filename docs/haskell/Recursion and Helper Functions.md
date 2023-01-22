---
sidebar_position: 2
---
## Recursion and Helper Functions

When you need helper variables in recursion to keep track of things, you can get them by defining a helper function with more arguments. Arguments of the helper function are variables you update in your loop.

The type of recursion where a function just directly calls itself with different arguments is called `tail recursion`. Tail recursion corresponds to loops, which means it is often fast because the compiler can generate a loop in machine code when it sees tail recursion.

## Guards

An easier alternative when you have multiple cases is Haskell's conditional definition or guarded definition. Guarded definitions loo like this:

```haskell
f x y z
  | condition1 = something
  | condition2 = other
  | otherwise  = somethingother
```

A condition can by any expression of type `Bool`.

## Lists

To handle variable numbers of items, we need the `list`, which is also a kine of basic datastucture in Haskell.Lists are used to store multiple values of the same type.

### List Operations

```haskell
head :: [a] -> a            -- returns the first element
tail :: [a] -> [a]          -- returns everything except the first element
init :: [a] -> [a]          -- returns everything except the last element
take :: Int -> [a] -> [a]   -- returns the n first elements
drop :: Int -> [a] -> [a]   -- returns everything except the n first elements
(++) :: [a] -> [a] -> [a]   -- lists are catenated with the ++ operator
(!!) :: [a] -> Int -> a     -- lists are indexed with the !! operator
reverse :: [a] -> [a]       -- reverse a list
null :: [a] -> Bool         -- is this list empty?
length :: [a] -> Int        -- the length of a list
```

Some list operations come from the module `Data.List`. You can import a module in code or in `GHCi` with the `import Data.List` syntax.

```haskell
Prelude> import Data.List
Prelude Data.List> sort [1,0,5,3]
```

### Immutability

Since Haskell is pure, Haskell list functions always return a new list.

### Type Inference and Polymorphism

Type variables are types that start with a small letter. A type variable means a type that could be anything, which can turn into concreate types by the process of type inference(unification).

### The Maybe Type

Sometimes an operation doesn't have a valid value, you can use an error value, like `-1` or In Haskell, change our return type to a `Maybe` type. The type `Maybe a` has two constructors: `Nothing` and `Just`.

```haskell
Prelude> :t Nothing
Nothing :: Maybe a

Prelude> :t Just "a camel"
Just "a camel" :: Maybe [Char]   -- the same as Maybe String
```

## Constructors

Constructors are special values that start with a capital letter that you can pattern match on. Constructors can be used just like Haskell values. Contructors that take no arguments like `Nothing`, and `False` are just constants. Constructors like `Just` that take an argument behave like functions.

```haskell
Prelude> :t Just
Just :: a -> Maybe a
```

## The Either Type

The `Either` type takes two type arguments. The type `Either a b` has two constructors: `Left` and `Right`. Left takes an argument of type a and Right takes an argument of type b. 

```haskell
readInt :: String -> Either String Int
readInt "0" = Right 0
readInt "1" = Right 1
readInt s = Left ("Unsupported string: " ++ s)
```

Haskell lists can only contain elements of the same type but you can use a type like `Either` to represent lists that can contain two different types of values.

```haskell
lectureParticipants :: [Either String Int]
lectureParticipants = [Right 10, Right 13, Left "easter vacation", Right 17, Left "lecturer was sick", Right 3]
```

## The case-of Expression

There's a way to pattern match in an expression, which looks like:

```haskell
case <value> of <pattern> -> <expression>
                <pattern> -> <expression>
                
describe :: Integer -> String
describe n = case n of 0 -> "zero"
                       1 -> "one"
                       2 -> "an even prime"
                       n -> "the number " ++ show n                
```

