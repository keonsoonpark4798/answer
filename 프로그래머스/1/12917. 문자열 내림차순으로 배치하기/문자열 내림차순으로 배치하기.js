function solution(s) {
    let answer = '';
    let arr = [];
    for(let i =0 ; i<s.length;i++)
    {
        arr[i] = s[i];
    }
    arr.sort().reverse();
    answer = arr.join('');
    console.log(answer);
    return answer;
}