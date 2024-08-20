function solution(arr) {
    let answer = true;
    arr = arr.split("");
    
    if(arr.length%2 != 0)
    {
        answer = false;
        return answer;
    }

    for(let i = 0; i<arr.length/2;i++)
    {
        if((arr[i] ==="[" && arr[arr.length-1-i] != "]") || arr[i] ==="]")
        {
            answer = false;
            break;
        }
        else if((arr[i] ==="{" && arr[arr.length-1-i] != "}") || arr[i] ==="}")
        {
            answer = false;
            break;
        }
        else if((arr[i] ==="(" && arr[arr.length-1-i] != ")")|| arr[i] ===")")
        {
            answer = false;
            break;
        }
    }

    return answer;
}

let arr = "({[]})";

console.log(`정답 : ${solution(arr)}`);