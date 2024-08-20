function solution(arr,target) {
    let answer = false;

    for(let i = 0; i<arr.length-1;i++)
    {
        if(arr[i]<=target)
        {
            for(let j = i+1;j<arr.length;j++)
            {
                if(target === arr[i]+ arr[j])
                {
                    answer = true;
                    break;
                }
            }
        }

        if(answer === true)
        {
            break;
        }
    }
    return answer;
}

let arr = [2, 7, 11, 15];
let target = 9;
console.log(`정답 : ${solution(arr,target)}`);