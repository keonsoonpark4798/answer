function solution(arr) {
    let answer = [0,0];
    arr.sort((a,b)=>a-b);
    answer[0] = arr[0];
    answer[1] = arr[arr.length-1];
    return answer;
}

let arr = [4,2,3,4,2,6,10,8];
console.log(`정답 : ${solution(arr)}`);