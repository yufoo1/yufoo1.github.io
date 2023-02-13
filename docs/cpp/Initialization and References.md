---
sidebar_position: 2
---
# Initialization and References

## Initialization

There are multiple ways to initialize a pair:

```cpp
std::pair<int, string> numSuffix1 = {1, "st"};

std::pair<int, string> numSuffix2;
numSuffix2.first = 2;
numSuffix2.second = "nd";


std::pair<int, string> numSuffix3 = std::make_pair(3, "rd");
```

`Uniform initialization` is curly bracket initialization. Available for all types, immediate initialization on declaration.

```cpp
std::vector<int> vec{1, 3, 5};
std::pair<int, string> numSuffix1{1, "st"};
int x{5};
string f{"Ken"};
```

Be careful with Vector initialization:

```cpp
std::vector<int> vec1(3, 5); // makes {5, 5, 5}, not {3, 5}
std::vector<int> vec2{3, 5}; // makes {3, 5};
```

## Using `auto`

Compiler can't deduce the type with no value provided. You shouldn't overuse `auto` and you'd better type it out for simple types, but use it to reduce long type names.

```cpp
int main() {
    int a, b, c; // can't use auto
    std::cin >> a >> b >> c;
    auto result = quadratic(a, b, c);
    bool found = result.first;
    if(found) {
        auto solutions = result.second;
        std:: cout << solutions.first << solutions.second << endl;
    } else {
        std::cout << "No solutions found" << end;
    }
}
```

## Structured Binding

Structured binding lets you initialize directly from the contents of a struct.

```cpp
auto p = std::make_pair("s", 5);
// before
string a = p.first;
int b = p.second;

// after
auto [a, b] = p;
```

## References

Reference is an alias for a named variable.

```cpp
void changeX(int& x) {
    x = 0;
}

void keepX(int x) {
    x = 0;
}

int a = 100;
int b = 100;

changeX(a); // a becomes a reference to x
keepX(b); // b becomes a copy of x


cout << a << endl // 0
cout << b << endl // 100
```

Remember, `=` automatically makes a copy. You can use `&` to avoid this.

```cpp
vector<int> original{1, 2};
vector<int> copy = original;
vector<int>& ref = original;
original.push_back(3);
copy.push_back(4);
ref.push_back(5);

cout << original << endl; // 1, 2, 3, 5
cout << copy << endl; // 1, 2, 4
cout << ref << endl; // 1, 2, 3, 5
```

`l-values` can appear on the `left or right` of an `=`, which have names and are `not temporary`. `r-values` can only appear on the `right` of an `=`, which don't have names and are temporary. So `r-values` can't be referenced. The following code is incorrect:

```cpp
void shift(vector<std::pair<int, int>>& nums) {
    for(auto& [num1, num2]: nums) {
        num1++;
        num2++;
    }
}


shift({{1, 1}}); // {{1, 1}} is an r-value, which can't be referenced


auto my_nums = {{1, 1}};
shift(my_nums); // correct
```

> You can only create references to variables.

## Const and Const References

`const` indivates a variable can't be modified.

```cpp
const std::vector<int> c_vec{1, 2};
const std::vector<int>& c_ref = vec;

c_vec.push_back(3); // error
c_ref.push_back(3); // error
```

You can't declase non-const reference to const variable.

```cpp
const std::vector<int> c_vec{1, 2};

std::vector<int>& bad_ref = c_vec; // error
```

C++, by default, makes copies when we do variable assignment. We need to use `&` if we need references instead.

```cpp
std::vector<int> vec{1, 2, 3};
const std::vector<int> c_vec{7, 8};

std::vector<int>& ref = vec;
const std::vector<int>& c_ref = vec;

auto copy = c_ref // non-const copy
const auto c_copy = c_ref // const copy
auto& a_ref = ref; // non-const reference
const auto& c_aref = ref // const reference
```

You can return references as well:

```cpp
int& front(std::vector<int>& vec) {
    return vec[0]; // assuming vec.size() > 0
}


int main() {
    std::vector<int> numbers{1, 2, 3};
    front(numbers) = 4; // vec = {4, 2, 3}
    return 0;
}
```
