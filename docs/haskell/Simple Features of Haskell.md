---
sidebar_position: 1
---
# Simple Features of Haskell

## Haskell

Hashkell is:

* Functional: The basic building blocks of programs are functions.
* Pure: Haskell functions don't have side effects.
* Lazy: Values are only evaluated when they are needed.
* Strongly typed: Every Haskell value, expression has a type and the compiler checks the types at compile-time.

* Type inferred: Most Haskell functions can be written completely without types.
* Garbage-collected: Haskell has automatic memory management via garbage collection.
* Compiled: Haskell is a compiled language.

## Features

* Higher-order functions: Functions can take functions as arguments.
* Anonymous functions aka lambdas: You can define single-use helper functions without giving them a name.
* Partial application: You can define new functions by giving another function only some of the arguments it needs.
* Algebraic datatypes: A syntax for defining datatypes that can contain a number of different cases.
* Pattern matching: Defining functions based on cases that correspond to your data definitions.
* Lists: Haskell has a concise built-in syntax for lists.
* Parameterized types: You can define types that are parameterized by other type.
* Type classes: Another form of polymorphism where you can give a function a different implementation depending on the arguments' types.

## Expressions and Types

Almost everything in a Haskell program is an expression. An expression has a value an a type. Parentheses can be used to group expressions. 

```haskell
g h f 1 		-- g(h, f, 1)
g h (f 1) 	-- g(h, f(1))
g (h f 1) 	-- g(h(f, 1))
g (h (f 1)) -- g(h(f(1)))
```

Some function names are made special characters and they are used as operators: between their arguments instead of before them.

```haskell
a + b				-- a + b
f a + g b		-- f(a) + g(b)
f (a + g b)	-- f(a + g(b))
```

> In Haskell, function application associates left, that is `f g x y` is actually the same as `(((f g) x) y)`.

## Structure of Haskell Program

``` haskell
module Gold where

phi :: Double -- definition of constant phi
phi = (sqrt 5 + 1) / 2

poly :: Double -> Double -- definition of poly
poly x = x ^ 2 - x - 1

f x = poly (poly x) -- lack of type annotation.

main = do
	print(polynomal phi)
	print(f phi)
```

For a multi-line definition in `GHCi`, you should use `;` to separate lines, or use the special `:{ :}` syntax to paste a block of code into it.

```haskell
ghci> :{
ghci| poly :: Double -> Double
ghci| poly x = x ^ 2 - x - 1
ghci| :}
```

## Basic Building Block

### Conditional

In Haskell, `if` is an expression, which means it has a value. It selects between two other expressions and you always need an else.

```haskell
price = if product == 'milk' then 1 else 2
```

## Local Definition

Haskell has two different ways for creating local definitions: `let ... in` and `where`.

```haskell
circleArea :: Double -> Double
circleArea r = pi * rsquare
	where pi = 3.1415926
				rsquare = r * r
```

```haskell
circleArea r = let pi = 3.1415926
									 rsquare = r * r
							 in pi * rsquare
```

### Immutability

The values of definitions in Haskell can't be changed.

### Pattern Matching

A definition can consist of multiple equations. The equations are matched in order against the arguments until a suitable one is found.

```haskell
greet :: String -> String -> String
greet "Finland" name = "Hei, " ++ name
greet "Italy"   name = "Ciao, " ++ name
greet "England" name = "How do you do, " ++ name
greet _         name = "Hello, " ++ name
```

You can also pattern match on multiple arguments and the equations are tried in order.

```haskell
login :: String -> String -> String
login "unicorn73" "f4bulous!" = "unicorn73 logged in"
login "unicorn73" _           = "wrong password"
login _           _           = "unknown user"
```

### Recursion

In Haskell, all sorts of loops are implemented with recursion.

```haskell
factorial :: Int -> Int
factorial 1 = 1
factorial n = n * factorial (n-1)
```

## Indentation

In Haskell, indentation matters:

* Things that are grouped together start from the same column.
* If an expression or equation has to be split on to many lines, increase indentation.
