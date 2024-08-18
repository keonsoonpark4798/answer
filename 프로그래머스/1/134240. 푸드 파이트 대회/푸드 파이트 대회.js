function solution(food) {
    let answer = '';
    let reverse = '';
    let count = 0;
    for(let i = 1; i<food.length;i++)
    {
        if(food[i]%2 !=0)
        {
            food[i] = food[i]-1;
        }
    }
    food.forEach(num => {
        count += num;
    })
    for(let j =1;j<food.length;j++)
    {
        let num = food[j]/2;
        for(let l = 0; l<num;l++)
        {
            answer += j;
        }
    }
    answer+='0'+answer.split("").reverse().join("");
    return answer;
}