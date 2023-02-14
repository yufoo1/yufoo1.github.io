---
sidebar_position: 6
---
# Classes

## Classes Intro

### Define

`Class` is a programmer-defined custom type, an abstraction of an object or data type. Classes provide their users with a public interface and separate this from a private implementation. `Public` section often defines an `interface` for interacting with the private member variables. `Private` section usually contains all member variables and Users can't access or modify anything in the private section.

```cpp
// student.h
class Student {
    public:
    std::string getName();
    void setName(std::string name);

    private:
    std::string name;
}

// student.cpp
#include student.h
std::string Student::getName() {
    // implementation
}

void Student::setName(std::string name) {
    
}


```

Each class has its own namespace. Syntax for calling / using something in a namespace is `namespace_name::name`. Inside the `{...}` the private member variables for `namespace_name` will be in scope.

`this->element_name` means the item in this object with name `element_name`. You can use `this` for naming conflicts.

### Constructors

Constructors define how the member variables of an object is initialized, which is what gets called when you first create this object.

```cpp
Student::Student() {
    name = "Ken";
}
```

A class can have multiple constructors, which are called overloadable.

```cpp
Student::Student() {
    name = "Ken";
}

Student::Student(std::string name) {
    this->name = name;
}
```

You can use initializer lists for speedier construction.

```cpp
// student.cpp
#include student.h
Student::Student() : name{""} {}
Student::Student(std::string name) : name{name} {}
```

### Arrays

Arrays are memory we allocate, so we need to give instruction for when to deallocate that memory. When we are done using our array, we need to `delete []` it.

```cpp
int* my_int_array;
my_int_array = new int[10];
int one_element = my_int_array[0];
delete[] my_int_array;
```

Deleteing(almost) always happens in the destructor of a class. The destructor is defined using `Class_name::~Class_name()`.

```cpp
// student.cpp
#include student.h
Student::~Student() {
    delete[] my_array;
}
```

## Template Classes Intro

`Template Class` is a class that is parametrized over some number of types. A class that is comprised of member variables of a general type / types.

```cpp
// mypair.h
template<typename First, typename Second> struct MyPair {
    First first;
    Second second;
};


template<typename First, typename Second> class Mypair {
    public:
        First getFirst();
        Second getSecond();

        void setFirst(First f);
        void setSecond(Second s);
    private:
        First first;
        Second second;  
};


// mypair.cpp
template<typename First, typename Second>
First MyPair::getFirst() {
    return first;
}
```


