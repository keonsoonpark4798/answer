function solution(keymap, targets) {
    let answer = [];
    let keyobject = [];
    let index = 0;
    keymap.forEach(function(key){
        for(let i =0; i<key.length;i++){
            if(!keyobject.hasOwnProperty(key[i])){
                keyobject[key[i]] = i+1; 
            }else if(keyobject[key[i]]>i+1){
                keyobject[key[i]] = i+1;
            }
        }
    });
    console.log(keyobject);
    targets.forEach(function(target){
        answer[index] = 0;
        for(let j = 0; j<target.length;j++){
            if(!keyobject.hasOwnProperty(target[j])){
                answer[index] = -1;
                break;
            }else{
                answer[index] += keyobject[target[j]];
            }
        }
        index++; 
    });
    return answer;
}