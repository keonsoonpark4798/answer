function solution(arr,k) {
    let answer = 0;
    let left = 0;
    let countzero = 0;

    for(let i = 0; i<arr.length;i++)
    {
        if(arr[i] === 0)
            countzero++;

        while(k<countzero)
        {
            if(arr[left]===0)
            {
                countzero--;
            }
            left++;
        }
        answer = Math.max(answer,i-left+1);
    }

    return answer;
}

const arr = [1,1,1,0,0,0,1,1,1,1,0];
const k = 2;
console.log(`정답 : ${solution(arr,k)}`);