function solution(doosan, kia) {
    let answer = 0;
    if(doosan>kia) {
        return answer;
    }
    else {
        let differ = kia - doosan;
        answer = differ + 4;
        return answer;
    }
}

const doosanScore = 0;
const kiaScore = 8;

console.log(`정답 : ${solution(doosanScore,kiaScore)}`);