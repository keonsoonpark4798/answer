function solution(A,B){
    var answer = 0;
    var arrA = A.sort((a,b)=>{
        return a-b;
    });
    
    var arrB = B.sort((a,b)=>{
        return b-a;
    });
    
    for(index in A){
        answer += A[index] * B[index];
    }

    return answer;
}