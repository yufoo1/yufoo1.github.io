---
sidebar_position: 8
---
# Template Functions

## Generic Programming and Template Functions

C++ is strongly typed, but generic C++ lets you parametrize data types. Template functions are completely generic functions.

```cpp
template<typename Type = int>
Type myMin(Type a, Type b) {
    return a < b ? a : b;
}

cout << myMin<int>(3, 4) << endl;
```

We can also implicitly leave it for the compiler to deduce.

```cpp
template<typename Type = int>
auto mySmarterMin(T a, U b) {
    return a < b ? a : b;
}

cout << mySmarterMin<int>(3.2, 4) << endl; // 3.2
```

Like template classes, template functions are not compiled until used. For each instantiation with different parameters, the compiler generates a neww specific version of your template. After compilation, it will look like you wrote each version yourself.

## Template Metaprogramming

Normally, code runs during runtime. But with template metaprogramming, code runs once during compile time.

```cpp
template<unsigned n>
struct Factorial {
    enum {value = n * Factorial<n - 1>::value};
}

template<>
struct Factorial<0> {
    enum {value = 1};
}

std::cout << Factorial<10>::value << endl;
```


