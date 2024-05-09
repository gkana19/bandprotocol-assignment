# Problem 2: Superman's Chicken Rescue

def problem2():
    # Step 1: Receive input 2 integers n and k
    # n is the number of chickens (size of array x)
    # k is the length of the roof Superman can carry
    n, k = map(int, input().split())

    if n < 1 or k > 1000000:
        print("Invalid input")
        return

    # Step 2: The next line contains n integers ( 1 <= x <= 1,000,000,000)
    # representing the positions of the chickens on the one-dimensional axis.
    # Input numbers in a single line
    x = [int(num) for num in input().split() if 1 <= int(num) <= 1000000000]

    # verify size of x is equal to n
    if len(x) != n:
        print("Invalid input")
        return

    # Sort ascending order of x
    x.sort()

    maxCount = 0

    for i in range(len(x)):
        tempCount = 0
        check = x[i] + k - 1

        for j in range(i, len(x)):
            if x[j] <= check:
                tempCount += 1

        if tempCount > maxCount:
            maxCount = tempCount

    return print(maxCount)


problem2()
