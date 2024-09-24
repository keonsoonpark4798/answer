function solution(s) {
    let answer = '';
    s = s.toLowerCase();
    for(let i = 0;i<s.length;i++){
        if(i == 0 || s[i-1] ==" "){
            s = s.substring(0,i)+s[i].toUpperCase()+s.substring(i+1);
        }
    }
    
    answer = s;
    return answer;
}
