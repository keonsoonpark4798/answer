function solution(elements) {
    var answer = 0;
    var sum = [];
    var newElements = elements.concat(elements);
    for(let i = 0; i<elements.length;i++){
        for(let j = 1; j<=elements.length;j++){
            let ElementArr = newElements.slice(i,i+j);
            let sumElement = ElementArr.reduce((a,b)=>(a+b));
            sum.push(sumElement);
        }
    }
    const set = new Set(sum);
    const sumArr = [...set];
    answer = sumArr.length;
    return answer;
}