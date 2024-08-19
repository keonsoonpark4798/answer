function solution(k, score) {
    var answer = [];
    var stage = [];
    for(let i =0; i<score.length;i++)
    {
        if(stage.length < k)
        {
            stage.push(score[i]);
            stage.sort((a,b) => a-b);
            answer.push(stage[0]);
        }
        else
        {
            if(score[i]> stage[0])
            {
                stage[0] = score[i];
                stage.sort((a,b) => a-b);
            }
            answer.push(stage[0]);
        }
    }
    return answer;
}