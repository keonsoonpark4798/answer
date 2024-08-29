function solution(X, Y) {
    let answer = '';
    let arrX = (X.split("")).sort((a,b)=>b-a);
    let arrY = Y.split("").sort((a,b)=>b-a);
    
    let Xobject = {};
    let Yobject = {};
    let includeNUM = [];
    
    arrX.forEach(function(value){
        if(Xobject.hasOwnProperty(value)){
            Xobject[value]++;
        }
        else{
            Xobject[value] = 1;
        }
    });
    console.log(Xobject);
    arrY.forEach(function(value){
        if(Yobject.hasOwnProperty(value)){
            Yobject[value]++;
        }
        else{
            Yobject[value] = 1;
        }
    });
    for(let i = 9;i>=0;i--)
    {
        if(Xobject[i] ==undefined || Yobject[i] ==undefined)
            continue;
        
        let count =Xobject[i] >= Yobject[i] ? Yobject[i] : Xobject[i];
        
        for(let j =0; j<count;j++)
        {
            includeNUM.push(i);
        }
    }
    
    answer = includeNUM.join("");
    if(answer === "")
        answer = "-1";
    else if(answer == 0)
        answer = "0";
    
    return answer;
}