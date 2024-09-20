function solution(id_list, report, k) {
    let answer = [];
    answer = new Array(id_list.length).fill(0);
    let ReportID = {};
    let ReportedCount = {};
    
    for(let i=0; i<id_list.length; i++){
        ReportID[id_list[i]] = new Set();
        ReportedCount[id_list[i]] = 0;
    }
    
    const set = new Set(report);
    const uniqueArr = [...set];
    
    for(let i=0; i<uniqueArr.length; i++){
        let temp = uniqueArr[i].split(" ");
        if(!ReportID[temp[0]].has(temp[1])){
            ReportID[temp[0]].add(temp[1]);
            ReportedCount[temp[1]]++;
        }
    }
    
    for(let i=0; i<id_list.length; i++){
        let n = ReportID[id_list[i]]
        for(let j of n){
            if(ReportedCount[j] >=k)
            {
              answer[i]++;
            }
        }

    }
    return answer;
}