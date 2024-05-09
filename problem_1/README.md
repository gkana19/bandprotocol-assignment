# Problem 1: Boss Baby's Revenge

## Description

### Input

A string (S, 1 <= len(S) <= 1,000,000) containing characters 'S' and 'R', where 'S' represents a shot and 'R'
represents revenge. The string represents the sequence of events for one day.

### Output

Return "Good boy" if all shots have been revenged at least once and Boss Baby doesn’t initiate any shots at
the neighborhood kids first. Return "Bad boy" if these conditions are not satisfied.

### Example

| Input    | Output   | Reason                     |
| -------- | -------- | -------------------------- |
| SRSSRRR  | Good boy | Match condition            |
| RSSRR    | Bad boy  | Boss initiait shots        |
| SSSRRRRS | Bad boy  | Last shot doesn't revenged |
| SRRSSR   | Bad boy  | Doesn't revenged all shots |
| SSRSRRR  | Good boy | Match condition            |

## Solution

Step 1 : Check length of S is valid in range.

Step 2 : Check if Boss Baby doesn’t initiate any shots by checking the first index is equal 'R'.

Step 3 : Loop every index if S. Count how many Boss took shots by 'S' means shot then increment result by 1 and 'R' means revenged so decrement result by 1, but lowest of result is **0**.

Conclusion : If the final result is **0** mean all shots have been revenged, other mean either all shots have not been revenged or Boss Baby was initiated shots.

## Run with python

```bash
python problem_1.py
```
