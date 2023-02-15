---

sidebar_position: 10
---

# Operators

## Operator Overloading

Operator overloading tells C++ what it means to use an operator on a class we've written ourselves. There are two ways to do it:

* Member functions

* Non-member functions

For `Member functions`, you should add a function called `operator@` to your class:

```cpp
class Time {
    bool operator<(const Time& rhs) const;
    Time operator+(const Time& rhs) const;
    bool operator!() const;
}
```

Then, call the function with `this` as the left hand side of the expression.

```cpp
Time a, b;
if(a.operator<(b)) {
    // do something
}
```

Binary operators accept the right hand side as an argument while unary operators don't take any arguments.

For `non-member functions`, you should add a function called `p[erator@` outside of your class and it takes all of its arguments.

```cpp
bool operator<(const Time& lhs, const Time& rhs);
Time operator+(const Time& lhs, const Time& rhs);
Time& operator+=(Time& lhs, const Time& rhs);
Time operator!(const Time& lhs);
```

The STL prefers using non-member functions for operator overloading. To allow non-member function to access `private` members, you should use `friend`.

```cpp
// fraction.h
class Fraction {
    friend Fraction operator*(const Fraction& lhs, const Fraction& rhs);
    friend ostream& operator<<(ostream& out, const Fraction& target);
}
```
