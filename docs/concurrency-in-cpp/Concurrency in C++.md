# Concurrency in C++

## Getting started

```cpp
#include <iostream>
#include <thread>
void hello() {
    std::cout << "Hello Concurrent World\n";
}

int main() {
    std::thread t(hello);
    t.join();
}
```

The declarations for the multithreading support in the Standard C++ Library are in new headers: the functions and classes for managing threads are declared in `<thread>`, whereas those for protecting shared data are in other headers.

Since every thread has to have an `initial function`, where the new thread of execution begins, the code for writing the message has been moved to a separate function. For the initial thread in an application, this is `main()`, but for every other thread it's specified in the constructor of a `std::thread` object.

After the new thread has been launched, the initial thread continues execution. If it didn't wait for the new thread to finish, it would merrily continue to the end of `main()` and end the program. `join()` causes the calling thread to wait for the thread associated whti the `std::thread` object.

## Basic thread management

The program exits when it returns from `main()`, when the specified entry point function returns, the thread exits.

### Launching a thread

```cpp
void do_some_word();
std::thread my_thread(do_some_work);
```

As with much of the C++ Standard Library, `std::thread` works with any callable type, so you can pass an instance of a class with a function call operator to the `std::thread` constructor instead:

```cpp
class background_task {
    public:
        void operator() () const {
            do_something();
            do_something_else();
        }
}
background_task f;
std::thread my_thread(f);
```

In this case, the supplied function object is copied into the storage belonging to the newly created thread of execution and invoked from there. 

The previous example can be written using a `lambda expression` as follows:

```cpp
std::thread my_thread([] {
   do_something();
    do_something_else(); 
});
```

If you don't wait for your thread to finish, you need to ensure that the data accessed by the thread is valid until the thread has finished with it. One common way to handle this scenario is to make the thread function self-contained and copy the data into the thread rather than sharing the data.

### Waiting for a thread to complete

If you need to wait for a thread to complete, you can do this by calling `join()` on the associated `std::thread` instance. The act of calling `join()` also cleans up any storage associated with the thread, so the `std::thread` object is no longer associated with the now-finished thread; it isn't associated with any thread.

### Waiting in exceptional circumstances

If you're detaching a thread, you can usually call `detach()` immediately after the thread has been started. But if you're intending to wait for the thread, you need to carefully pick the place in the code where you call `join()`. This means that the call to `join()` is liable to be skipped if an exception is thrown after the thread has been started but before the call to `join()`.

One way of doing this is to use the standard `RAII` and provide a class that does the `join()` in its destructor, as in the following listing:

```cpp
class thread_guard {
    std::thread& t;
    public:
        explicit thread_guard(std::thread& t_):
            t(t_){}
        ~thread_guard() {
            if(t.joinable()) t.join();
        }
        thread_guard(thread_guard const&) = delete;
        thread_guard& operator=(thread_guard const&) = delete;
}

struct func;
void f() {
    int some_local_state = 0;
    func my_func(some_local_state);
    std::thread t(my_func);
    thread_guard g(t);
    do_something_in_current_thread();
}
```

TThe destructor of `thread_guard` to see if the `std::thread` object is `joinable()` before calling `join()` is important because `join()` can be called only once for a given thread of execution.

The copy constructor and copy-assignment operators are marked `=delete` to ensure that they're not automatically provided by the compiler.

If you don't needd to wait for a thread to finish, you can avoid this exception-safety issue by `detaching` it.

### Running threads in the background

Calling `detach()` on a `std::thread` object leaves the thread to run in the background, with no direct means of communicating with it. Ownership and control are passed over to the C++ Runtime Library, which ensures that the resources associated with the thread are correctly reclasimed when the thread exits.

Detached threads are often called `daemon threads` after the UNIX concept of a `daemon process` that runs in the background without any explicit user interface. 

You can't call `detach()` on a `std::thread` object with no associated thread of execution so you can only call `t.detach()` for a `std::thread` object `t` when `t.joinable()` returns `true`.

## Passing arguments to a thread function

By default, the arguments are copied into internal storage, where they can be accessed by the newly created thread of execution, and then passed to the callable object or function as rvalues as if they were temporaries. This is done even if the corresponding parameter in the funtion is expecting a reference.

```cpp
void f(int i, std::string const& s);
std::thread t(f, 3, "hello");
```

This creates a new thread of execution associated with t, which calls f(3, "hello").

```cpp
void f(int i, std::string const& s);
void oops(int some_param) {
    char buffer[1024];
    sprintf(buffer, "%i", some_param);
    std::thread t(f, 3, buffer);
    t.detach();
}
```

In this case, it's the pointer to the local variable `buffer` that's passed through to the new thread and there's a significant changce that the `oops` function will exit before the buffer has been converted to a `std::string` on the new thread, thus leading to undefined behavior. The solution is to cast to `std::string` before passing the buffer to the `std::thread` constructor:

```cpp
std::thread t(f, 3, std::string(buffer));
```

If the object is copied, and you wanted a `non-const` reference, there will be a compile error.

```cpp
void update_data_for_widget(widget_id w, widget_data& data);
void oops_again(widget_id w) {
    widget_data data;
    std::thread t(update_data_for_widget, w, data);
    display_status();
    t.join();
    process_widget_data(data);
}
```

The `std::thread` constructor doesn't know that the second parameter is expected to be passed by reference and it blindly copies the supplied values. Therefore, this will fail to compile because the internal code passes copied arguments as rvalues in order to work with move-only types and you can't pass an rvalue to a function that expects a `non-const` reference. In this case, you can fix it by following:

```cpp
std::thread t(update_data_for_widget, w, std::ref(data);
```

## Transferring ownership of a thread

Many resource-owning types in the C++ Standard Library, such as `std::ifstream` and `std::unique_ptr`, are movable but not copyable, and `std::thread` is one of them, which means that the ownership of a particular thread of execution can be moved between `std::thread` instances.

```cpp
void some_function();
void some_other_function();
std::thread t1(some_function);
std::thread t2 = std::move(t1);
t1 = std::thread(some_other_function);
std::thread t3;
t3 = std::move(t2);
t1 = std::move(t3);
```

## Choosing the number of threads at runtime

`std::thread::hardware_concurrency()` returns an indication of the number of threads that can truly run concurrently for a given execution of a program. 

## Identifying threads

Thread identifiers are of type `std::thread::id` and can be retrieved in two ways. First, the identifier for a thread can be obtained from its associated `std::thread` object by calling the `get_id()` member function. If the `std::thread` object doesn't have an associated thread of execution, the call to `get_id()` returns a default-constructed `std::thread::id` object, which indicates `not any thread`. Alternatively, the identifier for the current thread can be obtained by calling `std::this_thread::get_id()`. The Standard Library also provides `std::hash<std::thread::id>` so that values of type `std::thread::id` can be used as keys in the new unordered associative containers.

Instances of `std::thread::id` are often used to check whether a thread needs to perform some operation.

```cpp
std::thread::id master_thread;
void some_core_part_of_algorithm() {
    if(std::this_thread::get_id() == master_thread) {
        do_master_thread_work();
    }
    do_common_work();
}
```


