---
sidebar_position: 8
---
# IO

## Taste of IO

Things like reading input, writing to a file, or talking over the network are side effects. However, representing side-effects and impurity in a pure language is possible. There are many ways of doing it, and the Haskell way is to use `Monads`.

Here's a taste of the `IO` Monad, which you can use for all sorts of side effects in Haskell.

```haskell
Prelude> :t getLine
getLine :: IO String
Prelude> line <- getLine
```

The `IO` action `getLine` has type `IO String`, which means that `GHCi` can execute the action to produce a value of type String.

When we enter `line <- getLine` into GHCi, we mean that: Execute the IO action getLine, and give the result the name line.

Some IO actions take parameters. For example `putStrLn :: String -> IO ()` takes a String and returns an IO action that prints that string. The `()` type is a special type that only has one value, `()`.

```haskell
Prelude> :t putStrLn
putStrLn :: String -> IO ()
Prelude> :t putStrLn "hello"
putStrLn "hello" :: IO ()
Prelude> val <- putStrLn "hello"
hello
Prelude> val
()
```

If you don't need the return value of an IO action, you can run it in GHCi without the `<-`:

```haskell
Prelude> putStrLn "hello"
hello
```

You can build your own IO actions by combining other actions with `do-notation`. A `do` block lists IO actions that are executed in order.

```haskell
greet :: IO ()
greet = do
  putStrLn "What's your name?"
  name <- getLine
  putStrLn ("Hello, " ++ name)
```

### What About Purity

It's important to remember the distinction between `defining` an IO action and `executing` it. Defining IO actions is pure, it's running them that causes side effects.

### What About Haskell Programs

The way Haskell programs work is that the IO action called `main` gets executed when the program is run.
