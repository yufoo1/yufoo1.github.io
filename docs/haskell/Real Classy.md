---
sidebar_position: 4
---
# Real Classy

## Tuples

Tuples or pairs are a way of bundling a couple of values of different types together. To get values out of tuples, you can use the functions `fst` and `snd`:

```haskell
fst :: (a, b) -> a
snd :: (a, b) -> b
```

you can also pattern match on tuples, which works for tuples of larger sizes.

Tuples are very useful in combination with lists. Here are some examples using the `zip`, `unzip` and `partition` functions from the `Data.List` module.

```haskell
zip :: [a] -> [b] -> [(a, b)]    -- two lists to list of pairs
unzip :: [(a, b)] -> ([a], [b])  -- list of pairs to pair of lists
partition :: (a -> Bool) -> [a] -> ([a], [a])    -- elements that satisfy and don't satisfy a predicate
```

## Folding

Prelude has a function called `foldr`, which performs a right associative fold over a `Foldable` data type.

```haskell
foldr :: (a -> b -> b) -> b -> [a] -> b
foldr f y []     = y
foldr f y (x:xs) = f x (foldr f y xs)
```

`foldr` calls its argument function `f` repeatedly with arguments:

* The first argument is the current element from the list.
* The second argument is what `f` returns for the rest of the list.

## Type Constraints

### Eq

In a `polymorphic` function, you need to add `type constraints`. To signal that a function only works on types that are members of the `Eq` class, such as:

```haskell
f :: (Eq a) => (a -> a) -> a -> Bool
f g x = x == g x
```

If you don't have a type annotation, `type inference` can provide the constraints.

```haskell
Prelude> f g x = x == g x
Prelude> :type f
f :: (Eq a) => (a -> a) -> a -> Bool
```

### Ord

The `Ord` class is for ordering. It has values `LT` for `less than`, `EQ` for `equal` and `GT` for `greater than`.

```haskell
compare :: Ord a => a -> a -> Ordering
(<) :: Ord a => a -> a -> Bool
(>) :: Ord a => a -> a -> Bool
(>=) :: Ord a => a -> a -> Bool
(<=) :: Ord a => a -> a -> Bool
max :: Ord a => a -> a -> a
min :: Ord a => a -> a -> a
```

The function `sort` from `Data.List` works on all types that belong to the `Ord` class.

```haskell
-- from the module Data.Ord
-- compares two values "through" the function f
comparing :: (Ord a) => (b -> a) -> b -> b -> Ordering
comparing f x y = compare (f x) (f y)

-- from the module Data.List
-- sorts a list using the given comparison function
sortBy :: (a -> a -> Ordering) -> [a] -> [a]

-- sorts lists by their length
sortByLength :: [[a]] -> [[a]]
sortByLength = sortBy (comparing length)
```

### Num, Integral Fractional, Floating

The `Num` class contains integer arithmetic:

```haskell
(+) :: Num a => a -> a -> a
(-) :: Num a => a -> a -> a
(*) :: Num a => a -> a -> a
negate :: Num a => a -> a    -- 0-x
abs :: Num a => a -> a       -- absolute value
signum :: Num a => a -> a    -- -1 for negative values, 0 for 0, +1 for positive values
fromInteger :: Num a => Integer -> a
```

`Integral` is the class of types that represent whole numbers. All types that belong to `Integral` also belong to `Num`.

```haskell
div :: Integral a => a -> a -> a
mod :: Integral a => a -> a -> a
```

`Fractional` is the class for types that have division. All types that belong `Fractional` alse belong to `Num`.

```haskell
(/) :: Fractional a => a -> a -> a
```

`Floating` contains some additional operations that only make sense for floating point numbers. All types that belong th `Floating` also belong to `Fractional`, of course to `Num`.

```haskell
sqrt :: Floating a => a -> a
sin :: Floating a => a -> a
```

### Read and Show

The `Show` and `Read` classes are for the functions `show` and `read`, that convert values to and from Strings.

```haskell
show :: Show a => a -> String
read :: Read a => String -> a

Prelude> show 3
"3"
Prelude> read "3" :: Int
3
Prelude> read "3" :: Double
3.0
```

### Foldable

`Foldable` represents is types that you can fold over. Lists are `Foldable` since we can use `length` and `foldr` on lists. `Maybe` is also `Foldable`. The `Foldable` instance for `Maybe` just pretends that values of `Maybe a` are like lists of length 0 or 1.

## More Data Structures

### Data.Map

The `Data.Map` module defines the `Map` type. Maps are search trees for key-value pairs. Since `Data.Map` contains some function with the same names as `Prelude` functions, the namespace needs to be imported `qualified`:

```haskell
import qualified Data.Map as Map
```

Now we can refer to the map type as ``Map.Map`. Here are the most important functions for maps:

```haskell
-- Create a Map from a list of key-value pairs
Map.fromList :: Ord k => [(k, a)] -> Map.Map k a

-- Insert a value into a map. Overrides any previous value with the same key.
-- Returns a new map. Does not mutate the given map.
Map.insert :: Ord k => k -> a -> Map.Map k a -> Map.Map k a

-- Get a value from a map using a key. Returns Nothing if the key was not present in the map.
Map.lookup :: Ord k => k -> Map.Map k a -> Maybe a

-- An empty map
Map.empty :: Map.Map k a
```

The `Ord` constraint for the key type of the map is needed because maps are implemented as `ordered binary search trees`.

### Data.Array

Another type that works kind of like a list but is more efficient for some operations is the `Array`.

Unlike the `Data.Map` module, the `Data.Array` can just be imported normally:

```haskell
import Data.Array
```

Let's look at the type of the `Array` function that constructs an array.

```haskell
array :: Ix i => (i, i) -> [(i, e)] -> Array i e
```

The `array` type is parameterized by two types: the index and the element type, which is different from other programming languages. The index type of those languages is always `int`. In Haskell, we can even have `Array (Int, Int) Int`, a two-dimensional array of ints.

Not all types can be index types. The `Ix` class collects all the types that can be used as array indices.

Then, the `array` function takes an extra `(i, i)` parameter, which are the minimum and maximum indices of the array. Therefore you can define an array that starts from m and goes to n in Haskell.

```haskell
myArray :: Array Int String
myArray = array (7,11) [(7,"seven"), (8,"eight"), (9,"nine"), (10,"ten"), (11,"ELEVEN")]
```

There's also the `listArray` constructor that just takes a list of elements in order:

```haskell
listArray :: Ix i => (i, i) -> [e] -> Array i e
```

Array are used with two new operators:

```haskell
-- Array lookup
(!) :: Ix i => Array i e -> i -> e
-- Array update
(//) :: Ix i => Array i e -> [(i, e)] -> Array i e
```

```haskell
Prelude> import Data.Array
Prelude Data.Array> myArray = listArray (7,11) ["seven", "eight", "nine", "ten", "ELEVEN"]
Prelude Data.Array> myArray
array (7,11) [(7,"seven"),(8,"eight"),(9,"nine"),(10,"ten"),(11,"ELEVEN")]
Prelude Data.Array> myArray ! 8
"eight"
Prelude Data.Array> myArray // [(8,"ocho"),(9,"nueve")]
array (7,11) [(7,"seven"),(8,"ocho"),(9,"nueve"),(10,"ten"),(11,"ELEVEN")]
```

There are many other array types like the mutable `IOArray` and the somewhat obscure `DiffArray`. What'more, there are also type classes for arrays like `IArray` and `MArray`.

> The `Map` and `Array` type are instances of `Foldable`. 

## Reading Docs

Since you are using the `stack` tool, you can also browse the documentation for the libraries stack has installed for you with the commands:

```bash
stack haddock --open
stack haddock --open <package>
```

