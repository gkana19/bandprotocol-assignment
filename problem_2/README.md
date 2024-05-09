# Problem 2: Superman's Chicken Rescue

## Description

### Input

- **First line** contains integers n and k, where n is the number of checkens and k is the length of the roof Superman can carry.
- **Second line** contains n integers ( 1 <= x <= 1,000,000,000) representing the positions of the chickens.

### Output

Output a single integer, denoting the maximum number of chickens Superman can protect with the given roof length.

### Note

- Superman can position the roof starting at any point on the axis
- The roof can cover chickens whose positions are within k units from its starting point. [p, p+k)
- It's not required to cover all chickens, but to maximize the number of chickens protected.
- It’s guaranteed that the given positions of the chickens will be sorted from lowest to highest.

## Solution

- Validate input n, k, and x is valid on condition.
- Declare _maxCount_ and _tempCount_
- Compare _x[j]_ and _check_ to count number of chicken's position that Superman can protect. If _x[j]_ lower than _check_

  ```python
  for i in range(len(x)):
    tempCount = 0
    check = x[i] + k - 1

    for j in range(i, len(x)):
        if x[j] <= check:
            tempCount += 1

        if tempCount > maxCount:
            maxCount = tempCount
  ```

- Return _maxCount_

## Run with python

```bash
python problem_2.py
```
