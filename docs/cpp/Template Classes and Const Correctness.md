---
sidebar_position: 7
---
# Template Classes and Const Correctness

## Template Classes

### Member Types

Sometimes, we need a name for a type that is dependent on our template types.

```cpp
// vector.h
template<typename T> class vector {
    public:
        using iterator = T* // something internal like T*
        iterator begin();
}

// vector.cpp
template <typename T>
typename vector<T>::iterator vector<T>::begin() {...}
```

### Type Aliases

You can use `using type_name = type` in application code as well. When  using it in a class interface, it defines a nested type, like `vector::iterator`. When using it in application code, it just creates another name for `type` within that scope.

## Const Correctness

`const` keyword indicating a variable, function or parameter can't be modified.

```cpp
// student.cpp
std::string Student::getName() const {
    return name;
}


// main.cpp
std::string stringify(const Student& s) {
    return s.getName();
}
```

`const-interface` means all member functions marked `const` in a class definition. Objects of type `const ClassName` may only use the cons-interface.

```cpp
using iterator = std::string*;
using const_iterator = const std::string*;
const iterator it_c = vec.begin(); // const ptr to non-const obj
const_interator c_it = vec.begin(); // non-const ptr to const obj
const const_iterator c_it_c = vec.begin(); // const ptr to const obj
```


