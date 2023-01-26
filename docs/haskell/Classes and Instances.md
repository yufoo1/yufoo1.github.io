---
sidebar_position: 6
---
# Classes and Instances

To define our own classes with existing classes, for example, make our own type a member of the `Eq` class,  we can:

```haskell
data Color = Black | White

instance Eq Color where
  Black == Black  = True
  White == White  = True
  _     == _      = False
```

A class instance is an `instance` block that contains definitions for the functions in that class.

## Syntax of Classes and Instances

A type class is defined using `class` syntax. The functions in the class are given types. 

```haskell
class Size a where
  size :: a -> Int
```

Instances of a class are defined with instance syntax. 

```haskell
instance Size Int where
  size x = abs x

instance Size [a] where
  size xs = length xs
```

A class can contain multiple functions, and even constants.

```haskell
class Size a where
  empty :: a
  size :: a -> Int
  sameSize :: a -> a -> Bool

instance Size (Maybe a) where
  empty = Nothing

  size Nothing = 0
  size (Just a) = 1

  sameSize x y = size x == size y

instance Size [a] where
  empty = []
  size xs = length xs
  sameSize x y = size x == size y
```

## Restrictions on Instances

You can only define instances where all type parameters are different type variables. The rule guarantees that it's simple for the compiler to loop up the correct type class instance. 

## Default Implementations

To give example values of types, you should:

```haskell
class Example a where
  example :: a           -- the main example for the type `a`
  examples :: [a]        -- a short list of examples
  examples = [example]   -- ...defaulting to just the main example

instance Example Int where
  example = 1
  examples = [0,1,2]

instance Example Bool where
  example = True  
```

Here's how Example works.

```haskell
Prelude> example :: Bool
True
Prelude> example :: Int
1
Prelude> examples :: [Bool]
[True]
Prelude> examples :: [Int]
[0,1,2]
```

For `Eq`, the docs say `Minimal complete definition: either == or /=`. 

For `Ord`, the docs say `Minimal complete definition: either compare or <=`.

## Useful Stuff

### Deriving

`deriving` is a way to get automatically generated class instances. The `Read` and `Show` classes should always be derived to get the standard behaviour.

### Asking GHCi About Classes

You can use the `:info` command in `GHCi` to get the contents and instances of a class.

## Hierarchies

Both classes and instances can form `hierarchies`. This means that a class or instance depends on another class or instance.

### Instance Hierarchies

Take defining an `Eq` instance for a simple pair type as an example, we should add a type constraint to the instance declaration to compare pairs of values of type `a`:

```haskell
instance Eq a => Eq (Pair a) where
  (MakePair x y) == (MakePair a b)   =   x==a && y==b
```

### Class Hierarchy

A class can depend on another class, which is useful for instance when you want to use functions from another class in your defualt implementations.

```haskell
class Size a where
  size :: a -> Int

class Size a => SizeBoth a where
  sizeBoth :: a -> a -> Int
  sizeBoth x y = size x + size y
```

