function solution(n, lost, reserve) {
    let answer = 0;
    let getClothes = [];
    
    let reallost = (lost.filter(x=> !reserve.includes(x))).sort((a,b)=> a-b);
    let realreserve = (reserve.filter(x=> !lost.includes(x))).sort((a,b)=> a-b);
    for(let i = 0;i<reallost.length;i++)
    {
        if(realreserve.includes(reallost[i]-1))
        {
            getClothes.push(reallost[i]);
            realreserve = realreserve.filter(x=> x!== reallost[i]-1);
        }
        else if(realreserve.includes(reallost[i]+1))
        {
            getClothes.push(reallost[i]);
            realreserve = realreserve.filter(x=> x!== reallost[i]+1);
        }
    }
    reallost = reallost.filter(x=> !getClothes.includes(x));
    answer = n - reallost.length;
    return answer;
}