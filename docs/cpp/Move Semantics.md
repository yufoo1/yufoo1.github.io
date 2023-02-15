---

sidebar_position: 12
---

# Move Semantics

## Lvalues and Rvalues

A `r-value` is `temporary`, and a `l-value` is not. The official definition is that a `l-value` has an address(can do `&`), and a `r-value` does not.

## Move Constructor

`std::move` is a cast to a rvalue &&(equivalent to `std::static_cast<T&&>`)

```cpp
vector<T>& operator=(vector<T>&& other) {
    _size(std::move(other._size)),
    _capacity(std::move(other._capacity))
    _elems = std::move(other._elems);
    other._elems = nullptr;
    other._size = 0;
}

vector<T>& v = {1, 2, 3};
vector<T>& v2;
v2 = std::move(v);
```

For our vector:

```cpp
template<typename T>
void vector<T>::push_back(T&& element) {
    elems[_size++] = std::move(element);
}
```

`std::swap` is something like this:

```cpp
template<typename T>
void swap<T& a, T& b> noexcept {
    T c(std::move(a));
    a = std::move(b);
    b = std::move(c);
}
```
