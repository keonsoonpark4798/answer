function solution(cards1, cards2, goal) {
    var answer = '';
    let card1Count = 0;
    let card2Count = 0;
    for(let i = 0; i<goal.length;i++)
    {
        if(goal[i] == cards1[card1Count])
        {
            card1Count++;
        }
        else if(goal[i] == cards2[card2Count])
        {
            card2Count++;
        }
        else
        {
            answer = "No";
        }
    }
    if(answer != "No")
    {
        answer = "Yes";
    }
    return answer;
}