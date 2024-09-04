function solution(ingredient) {
    // [2, 1, 1, 2, 3 ,1 ,2 ,3, 1] 야채, 빵, 빵, 야채, 고기, 빵, 야채, 고기, 빵
    let answer = 0;
    const pattern = [1, 2, 3, 1];
    
    for(let i = 0; i<=ingredient.length - pattern.length;i++)
    {
        let match = true;
        for(let j = 0; j<4; j++)
        {
            if(pattern[j] !== ingredient[i+j])
            {
                match = false;
                break;
            }
        }
        
        if(match)
        {
            answer += 1;
            ingredient.splice(i, 4);
            i-=4;
        }
    }
    return answer;
}