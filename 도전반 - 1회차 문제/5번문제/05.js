function solution(num, k) {
    let answer = 0;
    let arr = [];
    while(num>=1)
    {
        arr.push(num%10);
        num = Math.floor(num/10);
    }
    arr.sort((a,b)=>b-a);
    for(let i = 0; i<k;i++)
    {
        arr.pop();
    }
    answer = arr.join("");
    return answer;
}

let number = 1924;
let k = 2;

console.log(`정답 : ${solution(number,k)}`);