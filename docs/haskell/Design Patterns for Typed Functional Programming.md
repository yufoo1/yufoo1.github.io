---
sidebar_position: 7
---
# Design Patterns for Typed Functional Programming

## Modeling with Boxes

Sometimes, you don't need a new type, but instead can just a standard type. It's common to create a new type that just contains a `String`:

```haskell
data Plate = Plate String
  deriving (Show, Eq)
```

Addtionally, we can restrict the operations that are possible on `Plates` to a subset of those that are possible on strings. We can also define a constructor for `Plate`:

```haskell
parsePlate :: String -> Maybe Plate
parsePlate string
  | correctPlateNumber string  =  Just (Plate string)
  | otherwise                  =  Nothing
```

## Modeling with Cases

Haskell's algebraic datatypes are really powerful at modeling things based on `cases`. 

Many Haskell functions don't work with empty lists. You can track whether lists are possibly empty or guuaranteed to not be empty with `NonEmpty` type from the `Data.List.NonEmpty` module.

```haskell
data NonEmpty a = a :| [a]
```

Here the type represents a `lack of` cases. The type `NonEmpty a` will always consist a value of type `a`.

There is also an example of an `infix` constructor. `(:)` is another `infix` constructor that we met earlier. Any operator that begins with a colon(the `:` character) can be used as an infix constructor. We can pattern match on `(:|)` just like on `(:)`.

## Monoids

A pattern that comes up often in functional programming is the `monoid`. Explanations of monoids are very mathematical, but the idea is simple: combining things.

### Associative Operations

Many functions and operators we use are `associative`. For example, the `++` operator for catenating lists is associative. Another great example is the function composition operator. Both `(head . tail) . tail` and `head . (tail . tail)` compute the third element of a list.

However not all operators are associative. like `:`. While `True : (False : [])` is ok, `(True : False) : []` does not even type.

In order for an operation to be associative, it needs to take two arguments of the same type.

A function `f` is associative if these are the same:

```haskell
f x (f y z)
f (f x y) z
```

Two widely-used associative functions are the `min` and `max` functions.

### Semigroups

Haskell has a type class `Semigroup` that can be used when a type has one clear associative operation.

```haskell
class Semigroup a where
  -- An associative operation.
  (<>) :: a -> a -> a
```

Lists are an instance of `Semigroup` with `(++)` as `(<>)`.

Types that have multiple different associative operators usually aren't made an instance of Semigroup. Instead, the Haskell standard library uses boxing. Here are the definitions for `Sum` and `Product`.

```haskell
data Sum a = Sum a
instance Num a => Semigroup (Sum a) where
  Sum a <> Sum b  =  Sum (a+b)

data Product a = Product a
instance Num a => Semigroup (Product a) where
  Product a <> Product b   =  Product (a*b)
```

There is another benefit of boxing things: being able to declare different type class instances.

### Monoids

A `monoid` is a semigroup with a `neutral` element. A neutral element is a zero: an element that does nothing when combined with other elements.

The Haskell type class `Monoid` represents monoids.

```haskell
class Semigroup a => Monoid a where
  -- The neutral element
  mempty :: a
```

Here are the `Monoid` instances corresponding to our three examples of neutral elements:

```haskell
instance Monoid (Sum a) where
  mempty = Sum 0

instance Monoid (Product a) where
  mempty = Product 1

instance Monoid [] where
  mempty = []
```

A type forms a monoid if there's a way of combining two elements of the type together so that parenthesis don't matter, and there's a alse an `empty element` that can be combined with things without changing them.

### Why and How to Use Monoids

The reason we want both a neutral element and an associative binary operator is that those are the exact two things we need in order to `reduce` or `fold` multiple elements into on value. This is the job of:

```haskell
mconcat :: Monoid a => [a] -> a
```

The actual definitions of `Monoid` and `Semigroup` are:

```haskell
class Semigroup a where
  -- | An associative operation.
  (<>) :: a -> a -> a

  -- Combine elements of a nonempty list with <>
  sconcat :: NonEmpty a -> a
  sconcat as = ... -- default implementation omitted

  -- Combine a value with itself using <>, n times
  stimes :: Integral b => b -> a -> a
  stimes n x = ... -- default implementation omitted
  
class Semigroup a => Monoid a where
  mempty  :: a

  mappend :: a -> a -> a
  mappend = (<>)

  -- Combine elements of a list with <>
  mconcat :: [a] -> a
  mconcat = ... -- default implementation omitted
```

## Open and Closed Abstractions

When we can not only model a type with algebraic datatypes, but also with type classes, the difference is the data-based solution is `closed`, meaning the set of cases if fixed and we can handle all of them in one place, while the class-based solution is open, meaning we can add new cases, even in other modules.

```haskell
data Vehicle = Car String | Airplane String

sound :: Vehicle -> String
sound (Car _) = "brum brum"
sound (Airplane _) = "zooooom"
```

```haskell
data Car = Car String
data Airplane = Airplane String

class VehicleClass a where
  sound :: a -> String

instance VehicleClass Car where
  sound (Car _) = "brum brum"

instance VehicleClass Airplane where
  sound (Airplane _) = "zooooom"
```

A closed abstraction is nice when we want to know that we've handled all cases,.

## Modeling with Languages

Sometimes, it's useful to implement a mini programming language for defcribing parts of your software. The fancy term for these is an `Embedded Domain-Specific Language`. Haskell is well suited to modeling and interpreting languages. The expressions of the language are represented using(often recursive) algebraic data types. The language can be interpreted by a recursive function.
