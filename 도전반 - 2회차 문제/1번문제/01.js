function solution(str) {
    let answer = '';
    str = str.split("");
    const set = new Set(str);
    const uniqueStr = [...set];
    answer = uniqueStr.join("");
    return answer;
}

console.log(`정답 : ${solution("hello")}`);