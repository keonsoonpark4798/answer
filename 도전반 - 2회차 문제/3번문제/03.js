function solution(str) {
    let answer = [];
    let splitstr = str.split("");
    splitstr = splitstr.sort();
    answer[0] = splitstr[0];
    count = 1;
    index = 0;
    for(let i = 1; i<splitstr.length;i++)
    {
        if(answer[index] === splitstr[i])
        {
            count++;
        }
        else
        {
            answer[index+1] = count;
            answer[index+2] = "/";
            index = index+3;
            answer[index] = splitstr[i];
            count = 1;
        }

        if(i === splitstr.length-1)
        {
            answer[index+1] = count;
        }
    }
    answer = answer.join("");
    return answer;
}

let str = "ahhhhz";
console.log(`정답 : ${solution(str)}`);