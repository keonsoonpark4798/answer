function solution(numbers) {
    numbers.sort((a, b) => {
        const strA = a.toString();
        const strB = b.toString();
        return (strB + strA) - (strA + strB);
    });

    const answer = numbers.join("");
    return answer[0] === "0" ? "0" : answer;
}