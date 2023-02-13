---
sidebar_position: 1
---
# Types and Structs

## Types

### Statically typed and Dynamically typed

C++ is a `statically typed` language, which means everything with a name(variables, functions, etc) is given a type `before runtime`. Statically typed language is compiled language and types before program runs during compilation, which helps us to prevent errors before our code runs.

`Dynamically typed` means that everything with a name is given a type `at runtime based on the thing's current value`. Dynamically typed language is interpreted language and types checked on the fly, during execution, line by line.

### Overloading

To define two functions with the same name but different types, we can use `overloading`.

```cpp
int half(int x, int divisor = 2) {
    return x / divisor;
}

double half(double x) {
    return x / 2;
}


/*
half(4);
half(3, 3);
half(3.0);
*/
```

## Intro to Structs

### Struct Define and Initialization

Struct is a group of named variables each with their own type, a way to bundle different types together.

```cpp
struct Student {
    string name;
    string state;
    int age;
};
```

You can use abbreviated syntax to initialize a struct:

```cpp
Student s;
s.name = "Ken";
s.state = "CA";
s.age = 21;

```

In the same as:

```cpp
Student s = {"Ken", "CA", 21};
```

### Pair

`std::pair` is an STL built-in struct with two fields of any type. It is a `template`, which means you specify the types of the fields inside <> for each pair object you make. The fields in `std::pair`s are named `first` and `second`.

```cpp
std::pair<int, string> numSuffix = {1, "st"};
cout << numSuffix.first << numSuffix.second;
```

To avoid specifying the types of a pair, use `std::make_pair(field1m field2)`.

```cpp
std::pair<bool, Student> lookupStudent(string name) {
    Student blank;
    if(notFound(name)) return std::make_pair(false, blank);
    Student result = getStudentWithName(name);
    return std::make_pair(true, result);
}


std::pair<bool, Student> output = lookupStudent("Julie");
```

## Type Deduction with `auto`

`auto` is a keyword used in lieu of type when declaring a variable, tells the compiler to deduce the type.

```cpp
auto a = 3;
auto b = 3.14;
auto c = 'X';
auto d = "Hello World!";
auto e = std::make_pair(1, "Hello");
```


