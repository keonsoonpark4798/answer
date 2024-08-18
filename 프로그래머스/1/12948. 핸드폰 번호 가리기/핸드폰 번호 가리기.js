function solution(phone_number) {
    let answer = '';
    let secret = '';
    for(let i = 0;i<phone_number.length-4;i++)
    {
        secret +='*';
    }
    answer = phone_number.replace(phone_number.substr(0,phone_number.length-4),secret);
    return answer;
}