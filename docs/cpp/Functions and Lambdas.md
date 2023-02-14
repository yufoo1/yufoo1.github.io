---
sidebar_position: 9
---
# Functions and Lambdas

## Function Pointers

Function pointers can be treated just like other pointers. They can be passed arround like variables as parameters or in template functions and they can be called like functions.

## Lambdas

Lambdas are inline, anonymous functions that can know about  functions declared in their same  scope.

```cpp
auto var = [capture-clause] (auto param) -> bool {
    ...   
}


int limit = 5;
auto isMoreThan = [limit] (int n) {return n > limit;};
```

You can capture any outside variable, both by reference and by value.

```cpp
template<typename InputIt, typename Unipred>
int count_occurrences(InputIt begin, InputIt end, UniPred pred) {
    int count = 0;
    for(auto iter = begin; iter != end; ++iter) {
        if(pred(*iter)) count++;
    }
    return count;
}


int limit = 5;
auto isMoreThan = [limit] (int n) {return n > limit;};
std::vector<int> nums = {3, 5, 6, 7, 9, 13};

count_occurrences(nums.begin(), nums.end(), isMoreThan);
```

You can use lambda when you need a short function or to access local variables in your functions. If you need more logic or overloading, use funcion pointers.

## Functor

A functor is any class that provides an implementatioon of operator(). They can create `closures` of customized functions. Lambdas are just a reskin of functors.

```cpp
class functor {
    public:
        int operator() (int arg) const {
            return num + arg;
        }
    private:
        int num;
}

int num = 0;
auto lambda = [&num] (int  arg) {num += arg;};

lambda(5);
```
