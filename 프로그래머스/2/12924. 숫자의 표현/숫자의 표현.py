import math

def solution(n):
    answer = 0
    while n % 2 == 0:
        n //= 2

    limit = int(math.sqrt(n))
    
    for i in range(1, limit + 1):
        if n % i == 0:
            if i * i == n:
                answer += 1
            else:
                answer += 2
                
    return answer