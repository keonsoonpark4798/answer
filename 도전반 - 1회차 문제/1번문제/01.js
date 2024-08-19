function solution(a, b) {
    do
    {
        let tmp = b;
        b = a%b;
        a = tmp;
        //console.log(`B : ${b}`);
    }while(a%b==0);
    answer = a;
    return answer;
}

console.log(`30와 24의 최대공약수 : ${solution(30,24)}`);