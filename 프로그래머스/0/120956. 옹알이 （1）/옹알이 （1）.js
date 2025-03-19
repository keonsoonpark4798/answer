function solution(babbling) {
    let answer = 0;
    let word = ["aya","ye","woo","ma"];
    for(let i = 0; i<babbling.length;i++)
    {
        if(babbling[i].includes('ayaaya')||babbling[i].includes('yeye')
           ||babbling[i].includes('woowoo')||babbling[i].includes('mama'))
        {
            continue;
        }
        
        let findword = babbling[i].replace(/aya|ye|woo|ma/g,'');
        if(findword === '')
        {
            answer++;
        }
        
    }
    return answer;
}