function solution(players, callings) {
    let answer = [];
    let playersmap1 = new Map();
    let playersmap2 = new Map();
    
    players.forEach(function(str,index){
        playersmap1.set(index+1,str);
        playersmap2.set(str,index+1);
    });

    callings.forEach(function(str){
        let curranking = playersmap2.get(str);
        let overtakedPerson = playersmap1.get(curranking-1);
        playersmap1.set(curranking-1,str);
        playersmap1.set(curranking,overtakedPerson);
        playersmap2.set(str,curranking-1);
        playersmap2.set(overtakedPerson,curranking);
    });

    playersmap1.forEach(function(v){
        answer.push(v);
    })
    return answer;
}