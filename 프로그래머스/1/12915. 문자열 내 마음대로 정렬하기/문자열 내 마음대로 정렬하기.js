function solution(strings, n) {
    let answer = [];
    const preanswer = [];
    for(let i = 0; i<strings.length;i++)
    {
        preanswer.push(strings[i][n]+strings[i]);
    }
    preanswer.sort();
    console.log(preanswer);
    
    for(let j = 0; j < preanswer.length;j++)
    {
        answer[j] = preanswer[j].substr(1);
    }
    return answer;
}