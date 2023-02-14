---
sidebar_position: 3
---

# Streams

## Steams Intro

Steam is an abstraction for `input / output`. Streams convert between `data` and the `string representation of data`. `std::cout` is an output stream, which has type `std::ostream`.

There are two ways to classify streams. One is `by direction`.

* Input streams: Used for reading data.
  
  * `std::istream`
  
  * `std::cin`

* Output streams: Used for writing data.
  
  * `std::ostream`
  
  * `std::cout`

* Input / Output streams: Used for both reading and writing data.
  
  * `std::iostream`
  
  * `std::stringsteam`

Another is `by source or destination`.

* Console streams: Read / write to console.
  
  * `std::cout`
  
  * `std::cin`

* File Streams: Read / write to files.
  
  * `std::fstream`
  
  * `std::ifstream`
  
  * `std::ofstream`

* String streams: Read / write to strings
  
  * `std::stringstream`
  
  * `std::istringstream`
  
  * `std::ostringstream`

### Output Streams

Output streams have type `std::ostream` and can only send data to the stream. It interacts with the stream using the `<<` operator and converts any type into string and sends it to the stream.

`std::cout` is the output stream that goes to the console.

```cpp
std::cout << 5 << std::endl;
```

Output file streams have type `std::ostream`, only send data using the `<<` operator as well. It converts data of any type into a string and sends it to the file stream. You must initialize your own `ofstream` object linked to your file.

```cpp
std::ofstream out("out.txt");
out << 5 << std::end;;
```

`std::cout` is a global constant object that you get from `#include <iostream>`. To use any other output stream, you must first initialize it.

## Input Streams

`>>` is the stream extraction operator or simply extraction operator, which used to extract data from a stream and place it into a variable.

`<<` is the stream insertion operator or insertion operator, which used to insert data into a stream usually to output the data to a file, console, or string.

Input streams have type `std::istream` and can only receive strings using the `>>` operator, which receives a string from the stream and converts it to data. `std::cin` is the input stream that gets input from the console.

```cpp
int x;
string str;
std::cin >> x >> str;
```

First call to `std::cin >>` creates a command line prompt that allows the user to type until they hit enter. Each `>>` only reads until the next whitespace, which includes tab, space and newline.

`std::istream` as a sequence of characters. Int variables will stores `0` to indicate a fail and once an error is detected, the input stream's fail bit will be set, which leads to it no longer accept input.

`std::getline()` is used to read a line from a input stream.

```cpp
istream& getline(istream& is, string& str, char delim);
```

`std::getline()` stops when reads `delim` or reaches end of file, which default is `\n` and it firstly clear contents in `str`.

To read a whole line, use:

```cpp
std::getline(istream& stream, string& line);
```

Input file streams have type `std::ifstream` and only receives string using the `>>` operator. It receives strings from a file and converts it to data of any data. You muse initialize your own `ifstream` object linked to your file.

```cpp
std::ifstream in("in.txt")
string str;
in >> str;
```

`std::cin` is a global constant object that you get from `#include <iostream>`.

## String Streams

Stringstreams is a stream that can read from or write to a string object, which allows you to perform input / output operations on a string as if it were a stream.

```cpp
std::string input = "123";
std::stringstream stream(input);
int number;
stream >> number;
std::cout << number << std::endl; // Outputs "123"
```

If you only want to read or write data:

* read only: `std::istringstream`, gives any data type to the istringstream, it'll store it as a string.

* write only: `std::ostringstream`, makes an ostringstream out of a string, read from it word / type by word / type.


