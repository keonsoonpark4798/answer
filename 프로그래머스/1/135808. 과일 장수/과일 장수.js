function solution(k, m, score) {
    let answer = 0;
    //let count = score.length;
    let count = m-1;
    score.sort((a,b) => b-a);
    for(let i =0;i<Math.floor(score.length/m);i++)
    {
        //let arr = score.splice(0,m);
        if(count < score.length)
        {
            answer += score[count] * m;
            count +=m;
        }
    }
    return answer;
}