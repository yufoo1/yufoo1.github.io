---

sidebar_position: 13
---

# RAII and Smart Pointers

## Exceptions

Exceptions are a way to signal that something has gone wrong.

```cpp
try {
    // code associated with exception handler
} catch([exception type] e) {
    // exception handler
} catch([exception type] e) {
    // exception handler
} // etc
```

Lots of kinds of resources need to be released.

* Heap memory: `new` to acquire, `delete` to release.

* Files: `open` to acquire, `close` to release.

* Locks: `try_lock` to acquire, `unlock` to release.

* Sockets: `socket` to acquire, `close` to release.

## RAII

To guarantee resources get released, even if there are exceptions, you can use `RAII`(Resource Acquisition is Initialization). `RAII` means that all resources used by a class should be acquired in the constructor while all resources used by a class should be released in the destructor.

```cpp
void printFile() {
    ifstream input("hamlet.txt");
    string line;
    while(getline(input, line)) { // might throw exception
        cout << line << endl;
    }
    // no close call needed
} // stream destructor, releases access to file.
```

```cpp
class lock_guard {
    public:
        lock_guard(mutex& lock): acquired_lock(lock) {
            acqiored_lock(lock);
        }
        ~lock_guard() {
            acqiored_lock.unlock();
        }
    private:
        mutex& acquired_lock;
}
```

Acquire resources in the constructor of your class, release in the destructor. Clients of an RAII class won't have to worry about mismanaged resources.

## Smart Pointers

### std::unique_ptr

`std::unique_ptr` uniquely owns its resource and deletes it when the object is destroyed. It cannot be copied.

```cpp
void rawPtrFn() {
    std::uniques_ptr<Node> n(new Node);
    // do some stuff with n
} // free
```

### std::shared_ptr

If we want to have multiple pointers to the same object, we can use `std::shared_ptr`. The resource is deleted when none of then points to it.

```cpp
{
    std::shared_ptr<int> p1(new int);
    // Use p1
    {
        std::shared_ptr<int> p2 = p1;
        // use p1 and p2
    }
    // use p1
} // deallocated
```

### std::weak_ptr

`std::weak_ptr` can only be copy / move constructed(or empty).

```cpp
std::unique_ptr<T> up{new T};
std::unique_ptr<T> up = std::make_unique<T>(); // better, always use std::make_unique<T>()
```
