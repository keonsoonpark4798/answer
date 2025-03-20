function solution(m, n, puddles) {
    var visited = Array.from(Array(n),() => Array(m).fill(0));
    puddles.forEach(([x,y]) =>{visited[y-1][x-1] = -1;})
    visited[0][0] = 1;
    
    if(visited[n-2][m-1] == -1 && visited[n-1][m-2] == -1) return 0;
    
    for(let i = 0;i < n;i++){
        for(let j = 0; j < m;j++){
            if(i == 0 && j == 0) continue;
            if(visited[i][j] == -1) continue;
            
            let value = 0;
            if(i-1>=0 && visited[i-1][j] !== -1) value += visited[i-1][j];
            if(j-1>=0 && visited[i][j-1] !== -1) value += visited[i][j-1];
            visited[i][j] = value % 1000000007;

        }
    }
    return visited[n-1][m-1] % 1000000007;
}