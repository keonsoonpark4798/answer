function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0; i<n;i++){
        let line = "";
        let bin1 = arr1[i].toString(2);
        let bin2 = arr2[i].toString(2);
        bin1 = bin1.padStart(n, '0');
        bin2 = bin2.padStart(n, '0');
        
        for(let j = 0; j<n; j++){
            line += (bin1[j]=== '1'|| bin2[j]=== '1') ? '1' : '0';
        }
        line = line.replaceAll('1','#');
        line = line.replaceAll('0',' ');
        answer.push(line);
    }
    return answer;
}