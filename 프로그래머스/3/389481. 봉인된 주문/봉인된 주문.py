import string
from bisect import bisect_right
def solution(n, bans):
    def index_to_string(k, length):
        if k <= 0: return ""
        
        val = k - 1
        alphabet = string.ascii_lowercase
        res = []
        
        for _ in range(length):
            res.append(alphabet[val % 26])
            val //= 26
            
        return "".join(reversed(res))

    banned_by_length = {i: [] for i in range(1, 12)}
    for b in bans:
        if 1 <= len(b) <= 11:
            banned_by_length[len(b)].append(b)
    
    for i in range(1, 12):
        banned_by_length[i].sort()

    target_length = 0
    for length in range(1, 12):
        total_strings_of_length = 26**length
        banned_count_of_length = len(banned_by_length[length])
        valid_strings_of_length = total_strings_of_length - banned_count_of_length

        if n <= valid_strings_of_length:
            target_length = length
            break
        else:
            n -= valid_strings_of_length
    if target_length == 0:
        return "" 
    
    ans_k = -1
    low = 1
    high = 26**target_length
    banned_list = banned_by_length[target_length]
    
    while low <= high:
        mid_k = (low + high) // 2
        mid_string = index_to_string(mid_k, target_length)
        banned_before_count = bisect_right(banned_list, mid_string)
        rank = mid_k - banned_before_count
        
        if rank < n:
            low = mid_k + 1
        else:
            ans_k = mid_k
            high = mid_k - 1

    return index_to_string(ans_k, target_length)