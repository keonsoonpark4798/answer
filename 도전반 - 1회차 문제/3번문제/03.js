function solution(str) {
    let answer = '';
    let splitstr = str.split("");
    let reverse = splitstr.reverse();
    console.log(reverse);
    
    for(let i =0; i<reverse.length;i++)
    {
        let acil = reverse[i].charCodeAt();
        if(acil == '122')
        {
            acil = 97;
        }
        else
        {
            acil++;
        }
        reverse[i] = String.fromCharCode(acil);
    }
    console.log(reverse);
    answer = reverse.join("");
    return answer;
}

let str = "hello";
console.log(`정답 : ${solution(str)}`);