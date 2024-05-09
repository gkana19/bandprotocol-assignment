# Problem 1 Boss Baby's Revenge
def problem1():

    # Step 1: Receive a string
    S = input()

    # Check if the length of the string is within the specified range
    if len(S) < 1 or len(S) > 1000000:
        return print('len(S) is not within the valid range')

    result = 0

    for i in range(len(S)):
        # Step 2: Check if Boss Baby doesn’t initiate any shots
        if S[0] == 'R':
            return print('Bad boy')

        # Step 3: Check condition
        # return "Good boy" if all shots have been revenged at least once and Boss Babay doesn't initiate any shots
        # return "Bad boy" if conditions are not satisfied
        elif S[i] == 'S':
            result += 1
        elif S[i] == 'R' and result > 0:
            result -= 1
        else:
            result = 0

    if result == 0:
        return print('Good boy')
    else:
        return print('Bad boy')


problem1()
