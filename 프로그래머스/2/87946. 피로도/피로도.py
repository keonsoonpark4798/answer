def solution(k, dungeons):
    answer = 0
    n = len(dungeons)
    visited = [False] * n

    def dfs(current_k, count):
        nonlocal answer
        
        if count > answer:
            answer = count

            
        for i in range(n):
            if not visited[i] and current_k >= dungeons[i][0]:
                visited[i] = True
                dfs(current_k - dungeons[i][1], count + 1)
                visited[i] = False

    dfs(k, 0)
    return answer