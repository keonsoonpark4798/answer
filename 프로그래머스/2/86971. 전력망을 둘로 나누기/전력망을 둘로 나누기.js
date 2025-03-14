function solution(n, wires) {
    var answer = 100;
    for(let i = 0;i<wires.length;i++){
        var arr = wires.filter(function(_,index){
           return index !== i; 
        });
        var count = bfs(arr,arr[0][0]);
        var result = Math.abs(n - count - count);
        if(answer >= result){
            answer = result;
        }
    }
    return answer;
}
function bfs(arr,start){
    let queue = [start];
    let visited = new Set();
    visited.add(start);
    let count = 0;
    while (queue.length > 0) {
        let node = queue.shift();
        count++;

        for (let [a, b] of arr) {
            if (a === node && !visited.has(b)) {
                visited.add(b);
                queue.push(b);
            } else if (b === node && !visited.has(a)) {
                visited.add(a);
                queue.push(a);
            }
        }
    }
    return count;
}