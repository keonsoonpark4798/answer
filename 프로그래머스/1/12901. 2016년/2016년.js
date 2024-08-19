function solution(a, b) {
    var answer = '';
    var date1 = new Date('2006-1-01');
    var date2 = new Date("2006-"+ a + "-"+b);
    let diff = Math.abs(date2.getTime() - date1.getTime());
    diff = Math.floor(diff / (1000 * 60 * 60 * 24));
    if(a>=3)
    {
        diff++;
    }
    console.log(diff);
    switch(diff%7)
    {
        case 0 :
            answer = "FRI"
            break;
        case 1 :
            answer = "SAT"
            break;
        case 2 :
            answer = "SUN"
            break;
        case 3 : 
            answer = "MON"
            break;
        case 4 : 
            answer = "TUE"
            break;
        case 5 :
            answer = "WED"
            break;
        case 6 :
            answer = "THU"
            break;
        default :
            answer = "FRI"
            break;
    }
    return answer;
}