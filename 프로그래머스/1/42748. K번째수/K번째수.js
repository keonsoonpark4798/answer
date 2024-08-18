function solution(array, commands) {
    let answer = [];
    for(let i = 0; i<commands.length;i++)
    {
        let newarray = array.slice(commands[i][0]-1, commands[i][1]);
        console.log(newarray);
        newarray.sort((a, b) => a - b);
        answer[i] = newarray[commands[i][2]-1];
    }
    return answer;
}