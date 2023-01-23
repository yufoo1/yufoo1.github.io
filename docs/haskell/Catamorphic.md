---
sidebar_position: 3
---
# Catamorphic

## Functional Programming

In Haskell, a function is a value. Functions can be passed as parameters to other functions.

```haskell
func :: (Int -> Int) -> Int
```

The parentheses are needed because the type `Int -> Int -> Int` would be the type of a function taking two `Int` arguments. Functions that take functions as arguments or return functions are often called `higher-order` functions.

The most famous of these list-processing higher-order functions is `map`. It gives you a new list by applying the given function to all elements of a list.

```haskell
map :: (a -> b) -> [a] -> [b]
```

The partner in crime for `map` is `filter`. `filter` drops some elements of a list and keeps others.

```haskell
filter :: (a -> Bool) -> [a] -> [a]
```

You can also pass constructors as arguments to other functions.

```haskell
wrapJust xs = map Just xs
Prelude> :t wrapJust
wrapJust :: [a] -> [Maybe a]
Prelude> wrapJust [1,2,3]
[Just 1,Just 2,Just 3]
```

## Partial Application

```haskell
Prelude> add a b = a+b
Prelude> addThree = add 3
Prelude> map addThree [1,2,3]
[4,5,6]
Prelude> map (add 3) [1,2,3]
[4,5,6]
```

We've defined `add`, a function of two arguments, and only given it one argument. The new function just stores the given argument, waits for another argument, and then gives both to `add`.

In addtion to normal functions, partial application alse works with operators.

```haskell
Prelude> map (*2) [1,2,3]
[2,4,6]
Prelude> map (2*) [1,2,3]
[2,4,6]
Prelude> map (1/) [1,2,3,4,5]
[1.0,0.5,0.3333333333333333,0.25,0.2]
```

## Prefix and Infix Notations

Normal Haskell operators are applied with `prefix notation`, which is just a fancy way to say that the function name comes before the arguments. In contrast, operatos are applied with `infix notation`, which means the name of the function comes between the arguments.

```haskell
(+) 1 2 ==> 1 + 2 ==> 3
```

The function `zipWith` takes two lists. It can joins the lists using the function, such as:

```haskell
Prelude> zipWith (+) [0,2,5] [1,3,3]
[1,5,8]
```

Another nice feature of Haskell is the syntax for applying a binary function as if it was an infix operator, by surrounding it with backticks(`):

```haskell
6 `div` 2 ==> div 6 2 ==> 3
(+1) `map` [1,2,3] ==> map (+1) [1,2,3] ==> [2,3,4]
```

## Lambdas

Lambda expression are anonymous functions.

```haskell
let big x = x>7 in filter big [1,10,100]
filter (\x -> x>7) [1,10,100]
```

The backslash character(\\) stans for the greek letter lambda($\lambda$).

## The . and $ Operation

The `.` operator, is the function composition operator:

```haskell
(.) :: (b -> c) -> (a -> b) -> a -> c
```

The other operator `$` takes a function of type `a -> b` and a value of type `a`, and returns a value of type `b`. These expressions are the same:

```haskell
head (reverse "abcd")
head $ reverse "abcd"
```

## More Functional List Wrangling Examples

```haskell
takeWhile :: (a -> Bool) -> [a] -> [a]   -- take elements from a list as long as they satisfy a predicate
dropWhile :: (a -> Bool) -> [a] -> [a]   -- drop elements from a list as long as they satisfy a predicate
takeWhile even [2,4,1,2,3]   ==> [2,4]
dropWhile even [2,4,1,2,3]   ==> [1,2,3]
```

There's also the function `elem`, which can be used to check if a list contains an element:

```haskell
elem 3 [1,2,3]   ==> True
elem 4 [1,2,3]   ==> False
```

The `constant` function, `const :: a -> b -> a` always returns its first argument:

```haskell
const 3 True ==> 3
const 3 0    ==> 3
```

## Lists and Recursion

The `:` operator builds a list out of a head and a tail. `x :: xs` is the same as `[x] ++ xs`.

It's often convenient to use nested patterns while consuming a list:

```haskell
countNothings :: [Maybe a] -> Int
countNothings [] = 0
countNothings (Nothing : xs) = 1 + countNothings xs
countNothings (Just _  : xs) = countNothings xs
```

The direct way of generating a list is simpler, more efficient and more idiomatic.

## Constom Operators

In Haskell, an operator is anything built from the characters. Operators can be defined just like functions.

```haskell
(<+>) :: [Int] -> [Int] -> [Int]
xs <+> ys = zipWith (+) xs ys
```

## Typed Holes

A feature called `Typed Holes` lets you leave blanks in your code, and the compiler will tell you what type the expression in the blank should have. Blans can look like `_` or `_name`.A hole occurs on the righ side of a `=`, while an anything goes pattern occurs on the left side of a `=`.

```haskell
Prelude> filter _hole [True,False]

<interactive>: error:
    • Found hole: _hole :: Bool -> Bool
    ...
```

