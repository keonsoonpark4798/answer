function solution(str) {
    let answer = [];
    answer.push(str);
    str = str.split("");
    for(let i = 1; i<str.length;i++)
    {
        let tmp = str[0];
        str.shift();
        str.push(tmp);
        let strarr= str.join("");
        answer.push(strarr);
    }
    return answer;
}

console.log(`정답 : ${solution("abc")}`);