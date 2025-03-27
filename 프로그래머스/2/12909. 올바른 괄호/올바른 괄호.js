// function solution(s){
//     var answer = true;
//     let queue = [];
    
//     for(str in s){
//         if(s[str] == "("){
//             queue.push(s[str]);
//         }else{
//             if(queue.length == 0){
//                 answer = false;
//                 break;
//             }else{
//                 queue.pop();
//             }
//         }
//     }
//     if(queue.length != 0){
//         answer = false;
//     }

//     return answer;
// }

function solution(s) {
    let stack = [];

    for (let char of s) {
        if (char === "(") {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}
