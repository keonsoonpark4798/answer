function solution(arr) {
    var answer = 0;
    if(arr.length == 1) return arr[0];
    
    var gd = gcd(arr[0], arr[1]);
    answer = (arr[0] * arr[1]) / gd;
    
    if(arr.length > 2){
        for(let i =2; i< arr.length;i++){
            gd = gcd(answer, arr[i]);
            answer = (answer * arr[i]) / gd;
        }
    }
    return answer;
}

function gcd (a, b){
  
    var divisor;
    while(b){
        divisor = a % b;
        a = b;
        b = divisor;
    }
    return a;
}