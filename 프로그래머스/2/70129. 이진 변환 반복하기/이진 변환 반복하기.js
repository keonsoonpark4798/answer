function solution(s) {
    let answer = [0,0];
    while(s != "1"){
        let zerocount = s.split('0').length - 1;
        answer[1]= answer[1]+zerocount; 
        s = s.replace(/0/g, '');
        s = (s.length).toString(2);
        answer[0]++;
    }
    return answer;
}