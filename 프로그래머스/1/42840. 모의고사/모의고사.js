function solution(answers) {
    let answer = [];
    let one = [1,2,3,4,5];
    let two = [2,1,2,3,2,4,2,5]
    let three = [3,3,1,1,2,2,4,4,5,5];
    let onecount = 0;
    let twocount = 0;
    let threecount = 0;
    for(let i = 0; i<answers.length;i++)
    {
        if(one[i%5] == answers[i])
        {
            onecount++;
        }
        
        if(two[i%8] == answers[i])
        {
            twocount++;
        }
        
        if(three[i%10] == answers[i])
        {
            threecount++;
        }
    }
    
    let max = Math.max(Math.max(onecount,twocount),threecount);
    
    if(max === onecount)
    {
        answer.push(1);
    }
    if(max === twocount)
    {
        answer.push(2);
    }
    if(max === threecount)
    {
        answer.push(3);
    }
    return answer;
}