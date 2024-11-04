function solution(n, left, right) {
    var answer = [];
//     const arr = new Array(n).fill(0).map(()=> Array(n));
    
//     for(let i =0;i<n;i++){
//         for(let j =0; j<n;j++){
//             arr[i][j] = Math.max(i,j)+1;
//         }
//     }
//     const realArr = arr.reduce((acc,cur)=>{
//         return acc.concat(cur);
//     });
//     answer = realArr.slice(left,right+1);
    while(left<=right){
        answer.push(Math.max(Math.floor(left/n),left % n)+1);
        left++;
    }
    return answer;
}