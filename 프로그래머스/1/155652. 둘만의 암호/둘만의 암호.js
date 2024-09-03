function solution(s, skip, index) {
    let answer = '';
    let arrStr = [];
    let arrS = [];

    for(let i = 0; i<s.length;i++){
        arrStr.push(s[i].charCodeAt());
    }
    for(let i = 0; i<skip.length;i++){
        arrS.push(skip[i].charCodeAt());
    }
    arrS.sort((a,b)=>a-b);
    
    for(let i  = 0; i<arrStr.length;i++){
        for(let j = 0;j<index;j++){
            arrStr[i]++;
            if(arrStr[i] == 123){
                arrStr[i] = 97;
            }
            
           while(arrS.includes(arrStr[i])){
               arrStr[i]++;
               if(arrStr[i] == 123){
                    arrStr[i] = 97;
               }
           }
        }
    }
    
    arrStr.forEach(num=>answer+=String.fromCharCode(num));
    
    return answer;
}