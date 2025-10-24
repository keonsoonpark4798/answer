def solution(n):
    c = n & -n
    r = n + c
    ones = ((n ^ r) // c) >> 2
    
    return r | ones