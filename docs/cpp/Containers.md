# Containers

## Defining Containers

Container is an object that allows us to collect other object together and interact with them in some way. The STL has many types of containers: Vector, Stack, Queue, Set, Map, Array, Deque, List, Unordered Set, Unordered Map.

An `array` is the primitive form of a vector, which has fixed size in a strict sequence.

A `deque` is a `double ended queue`.

A `list` is a doubly linked list, which can loop through in either direction.

There are two types of containers:

* Sequence
  
  * Containers that can be accessed sequentially.
  
  * Anything with an inherent order goes here.

* Associative
  
  * Containers that don't necessarily have a sequential order.
  
  * More easily searched.
  
  * Maps and Sets go here.

## Vector Implementation

At a high level, a vector is an `ordered` collection of elements of the `same type` that can grow and shrink in size.

* `_size`: number of elements in the vector.

* `_capacity`: space allocated for elements.

## Map Implementation

Maps are implemented with pairs(`std::pair<const key, value>`) and keys must be immutable.

## Unordered Maps / Sets

Both maps and sets in the STL have an unordered version:

* Ordered maps / sets require a `comparison operator` to be defined.

* Unordered maps / sets require a `hash function` to be defined.

Unordered maps / sets are usually faster than ordered ones.

## Container Adaptors

Container adaptors are `wrappers` to existing containers. Wrappers modify the interface to sequence containers and change what the client is allowed to do / how they can interact with the container.
