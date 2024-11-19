---
title: Arrays, Stacks, & Queues
---

# Arrays, Stacks, & Queues

## Arrays

An array is a linear data structure that stores elements of the same type in a **contiguous block of memory**. It is also known as a static array or a one-dimensional array. Here is a more detailed description of the array data structure:

- Elements of an array are of the same data type.
- Arrays are indexed, meaning each element in the array has a unique index that allows access to its value.
- The first element in an array is typically assigned index 0 and the last element is assigned the last index.
- Static arrays have a fixed size, which means once created, you cannot change its size.
- Arrays support basic operations such as accessing elements, modifying elements, and iterating over all elements.

Overall, arrays provide a simple and efficient way to work with collections of data.

::: code-group

```py [Python]
arr = [0, 1, 2, 3]

arr[2] = "item"
#[0, 1, "item", 3]

size = len(arr)
```

```c++ [C++]
#include <iostream>

int main(void) {
    int size = 4;
    int arr[size];
    arr[2] = 3;

    int nums[3] = {10, 20, 30};

    int size = sizeof(nums) / sizeof(nums[0]);
    return 0;
}
```

:::

Python lists are implemented as dynamic arrays under the hood. Initially, when you create a list with a few elements, Python allocates memory for a small array to hold those elements. As elements are added to the list and it reaches capacity, a growth strategy to resize the array often doubling the size of the array each time it needs to be resized. When the array needs to be resized, existing elements are copied to the newly created larger array in linear time.

::: tip How can Python lists store items of different types?
Python lists can store different item types because they are implemented using pointers to Python objects. Each element in a Python list is essentially a reference to a Python object, rather than the actual object itself. This allows lists to store objects of different types meaning the memory footprint of the list itself remains relatively small.
:::

C++ arrays are static arrays. All the above-mentioned properties hold for these.

::: info Note
In C++, vectors `std::vector` are dynamic arrays that are part of the Standard Template Library (STL).

```c++ [C++]
#include <vector> // dont forget to add this (safer)

std::vector<int> nums = {10, 20, 30};

std::vector<int> arr;
arr.push_back(10);
arr.push_back(20);
```

:::

### Time Complexity

| Operation     | Static | Dynamic            |
| ------------- | ------ | ------------------ |
| Access        | $O(1)$ | $O(1)$             |
| Remove/Insert | $O(n)$ | $O(1)$ (Amortized) |
| Traverse      | $O(n)$ | $O(n)$             |

$O(n)$ memory requirements.

### Useful methods

::: code-group

```python [Python lists]
arr.append(4) # Adds an item to the end of the list.
arr.extend([3,4,5]) # Add multiple items to the end of the list.
arr.insert(index, item) # Insert an item at a specific index.
arr.remove(item) # Remove the first occurrence of an item from the list.
arr.pop() # Remove and return the last item in the list.
arr.pop(index) # Remove and return an item at a specific index.
arr.reverse() # Reverse the order of the list in-place.
arr.index(item) # Return the index of the first occurrence of an item in the list.

# Traverse
for i in range(len(arr)):
    print(arr[i])
```

```cpp [C++ vectors]
vec.push_back(item) // Add an item to the end of the vector.
vec.pop_back() // Remove and return the last item in the vector.
vec.insert(index, item) // Insert an item at a specific index.
vec.erase(index) // Remove an item at a specific index.
vec.clear() // Remove all items from the vector.
vec.size() // Return the number of items in the vector.
vec.empty() // Return true if the vector is empty, false otherwise.
vec.reserve(size) // Reserves capacity for at least `size` items in the vector.
vec.shrink_to_fit() // Reduces the capacity of the vector to fit its size.

// Traverse
for (int i = 0; i < nums.size(); i++) {
        cout << nums[i] << endl;
}
```

:::

## Stack

A stack is a linear data structure that follows a particular order in which the operations are performed. The order is LIFO(Last In First Out). The principal operations of a stack are:

- Push
- Pop
- Peek
- isEmpty

::: code-group

```python [Python]
# Stacks in python can be implemented using lists (dynamic arrays).
stack = []

# Stack operations
stack.append(10)  # Push
stack.append(20)
stack.append(30)
print(stack)  # [10, 20, 30]

item = stack.pop()  # Pop
print(item)  # 30
print(stack)  # [10, 20]

peek_item = stack[-1]  # Peek
print(peek_item)  # 20

is_empty = not stack  # isEmpty
print(is_empty)  # False
```

```cpp [C++]
// Stacks in C++ uses vector or deque (default) as the underlying container.
#include <stack>
#include <iostream>

int main() {
    std::stack<int> stack;

    // Push
    stack.push(10);
    stack.push(20);

    // peek
    std::cout << stack.top() << std::endl;  // 20

    // pop
    int item = stack.pop();
    std::cout << item << std::endl;  // 20

    std::cout << stack.size() << std::endl;  // 1

    // isEmpty
    std::cout << stack.empty() << std::endl;  // false

    return 0;
}
```

:::

## Queue

A queue is another linear data structure that follows a particular order in which the operations are performed. The order is FIFO(First In First Out). The principal operations of a queue are:

- Enqueue
- Dequeue
- Peek
- isEmpty

::: code-group

```python [Python]
# Queues in python can be implemented using lists (dynamic arrays).
queue = [] # Enqueue
queue.append(10)
 queue.append(20)

# Dequeue
item = queue.pop(0)

# Peek
peek_item = queue[0]
print(peek_item)  # 20

# isEmpty
is_empty = not queue
print(is_empty)  # False

# Queues can also be implemented with Deque (double ended queue) in Python.
from collections import deque
queue = deque()
# Enqueue
queue.append(10)
queue.append(20)

# Dequeue
item = queue.popleft()

# Peek
peek_item = queue[0]
print(peek_item)  # 10

# isEmpty
is_empty = not queue
print(is_empty)  # False
```

```cpp [C++]
//Queues in C++ uses deque (default) as the underlying container.

#include <queue>
#include <iostream>

int main() {
    std::queue<int> qq;

    // Enqueue
    qq.push(10);
    qq.push(20);

    // Dequeue
    int item = qq.pop();
    std::cout << item << std::endl;  // 10

    // Peek
    std::cout << qq.front() << std::endl;  // 20

    // isEmpty
    std::cout << qq.empty() << std::endl;  // false

    return 0;
}
```

:::
