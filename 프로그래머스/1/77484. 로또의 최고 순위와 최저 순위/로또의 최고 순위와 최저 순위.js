function solution(lottos, win_nums) {
    let answer = [];
    let count = 0;
    let countzero = 0;
    lottos.sort((a,b)=>a-b);
    if(lottos[5] === 0)
    {
        return answer = [1,6];
    }
    for(let j = 0; j<lottos.length;j++)
    {
        if(lottos[j] === 0)
            countzero++;
    }
    
    for(let i = 0; i<win_nums.length;i++)
    {
        const isexist = lottos.find(function (num){
            if(num === win_nums[i])  {
            return true;
            }
        });
        if(isexist !=undefined)
            count++;
    }
    if(count>=2)
    {
        answer[1] = 7 - count;
    }
    else{
        answer[1] = 6;
    }
    answer[0] = answer[1] - countzero;
    return answer;
}