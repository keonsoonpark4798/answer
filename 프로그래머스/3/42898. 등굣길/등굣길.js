function solution(m, n, puddles) {
    var visited = Array(n).fill(1).map(row => Array(m).fill(0));
    visited[0][0] = 1;
    puddles.forEach(puddle =>{
        visited[puddle[1]-1][puddle[0]-1] = -1;
    })
    if(visited[n-2][m-1] == -1 && visited[n-1][m-2] == -1) return 0;
    
    for(let i = 0;i<=n-1;i++){
        for(let j = 0; j<=m-1;j++){
            if(i == 0 && j == 0) continue;
            if(visited[i][j] == -1) continue;
            if(i == 0) {
                if(visited[i][j-1] == 1){
                    visited[i][j] = 1;
                }else{
                    visited[i][j] = -1;
                }
            }else if(j == 0){
                if(visited[i-1][j] == 1){
                    visited[i][j] = 1;
                }else{
                    visited[i][j] = -1;
                }
            }
            else{
                let value = 0;
                if(visited[i-1][j] !== -1) value += visited[i-1][j];
                if(visited[i][j-1] !== -1) value += visited[i][j-1];
                visited[i][j] = value % 1000000007;
            }
        }
    }
    return visited[n-1][m-1];
}