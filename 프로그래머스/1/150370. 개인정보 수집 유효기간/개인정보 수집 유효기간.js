function solution(today, terms, privacies) {
    let answer = [];
    let expirydate = {};
    
    today = parseInt((today.split(".")).join(""));
    terms.forEach(function(str){
        let splitStr = str.split(" ");
        expirydate[splitStr[0]] = splitStr[1];
    });
    
    privacies.forEach(function(str,index){
        let splitData = str.split(" ");
        let date = splitData[0].split(".");
        date = date.map(Number);
        date[1] = date[1] + parseInt(expirydate[splitData[1]]);
        while(date[1]>12){
            date[0]++;
            date[1] -= 12;
        }
        date[2]--;
        if(date[2] <= 0){
            date[1]--;
            date[2] = 28;
            if(date[1] <= 0){
                date[1] = 12;
                date[0]--;
            }
        }
        if(date[1] < 10){
            date[1] = "0"+date[1];
        }
        
        if(date[2] < 10){
            date[2] = "0"+date[2];
        }
        date = parseInt(date.join(""));
        
        if(today>date){
            answer.push(index+1);
        }
    });
    return answer;
}