function solution(arr) {
    let answer = [0,0];
    for(let i = 0; i<arr.length;i++)
    {
        if(arr[i]%2==0)
        {
            answer[0]++;
        }
        else
        {
            answer[1]++;
        }
    }
    return answer;
}

let arr = [1,2,3,4,5,6,7,8];
console.log(`정답 : ${solution(arr)}`);