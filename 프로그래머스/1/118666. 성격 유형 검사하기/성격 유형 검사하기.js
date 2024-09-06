function solution(survey, choices) {
    var answer = '';
    let count = 0;
    let surveyObject = {
        R : 0,
        T : 0,
        C : 0,
        F : 0,
        J : 0,
        M : 0,
        A : 0,
        N : 0,
    };
    survey.forEach(function(value){
        let array = value.split("");
        let first = array[0];
        let last = array[1];
        if(choices[count]>4)
        {
            if(surveyObject.hasOwnProperty(last)){
                surveyObject[last] += choices[count]-4;
            }
            else{
                surveyObject[last] = choices[count]-4;
            }
        }else{
            if(surveyObject.hasOwnProperty(first)){
                surveyObject[first] += Math.abs(choices[count]-4);
            }
            else{
                surveyObject[first] = Math.abs(choices[count]-4);
            }
        }
        count++;
    });
    if(surveyObject["R"]>=surveyObject["T"]){
        answer+="R";
    }else{
        answer+="T";
    }
    
    if(surveyObject["C"]>=surveyObject["F"]){
        answer+="C";
    }else{
        answer+="F";
    }
    
    if(surveyObject["J"]>=surveyObject["M"]){
        answer+="J";
    }else{
        answer+="M";
    }
    
    if(surveyObject["A"]>=surveyObject["N"]){
        answer+="A";
    }else{
        answer+="N";
    }
    return answer;
}