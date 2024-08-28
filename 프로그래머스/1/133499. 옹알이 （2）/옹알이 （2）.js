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
        console.log(findword);
        if(findword === '')
        {
            answer++;
        }
        //let arr = babbling[i].split(/aya|ye|woo|ma/);
        //console.log(arr);
        
    }
    return answer;
}