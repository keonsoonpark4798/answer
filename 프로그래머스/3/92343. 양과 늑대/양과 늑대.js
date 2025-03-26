function solution(info, edges) {
    var answer = 0;

    // 그래프 구성 (인접 행렬)
    let graph = new Array(info.length).fill(0).map(e => new Array(info.length).fill(false));
    for (let i of edges) {
        graph[i[0]][i[1]] = true;
        graph[i[1]][i[0]] = true; // 양방향 그래프
    }

    // 캐시 설정
    let cache = {};
    let cache2 = {}; // 이미 방문한 상태 관리
    let cache3 = {}; // 양의 수 기록

    // 시작 상태 초기화 (0번 노드에서 양을 1마리 모음)
    let solution = new Array(info.length).fill(0);
    solution[0] = 1;
    cache[JSON.stringify(solution)] = 1;
    cache2[JSON.stringify(solution)] = true;
    cache3[JSON.stringify(solution)] = 1;

    // BFS 큐 초기화
    let queue = [solution];
    
    while (queue.length > 0) {
        let cur = queue.shift();

        // 이미 방문한 상태면 넘어감
        if (cache[JSON.stringify(cur)] === 0) {
            continue;
        }

        // 현재 상태에서 다음 상태로 진행
        for (let i = 0; i < info.length; i++) {
            for (let j = 0; j < info.length; j++) {
                if (cur[i] && graph[i][j] && !cur[j]) {
                    // 새로운 상태 생성
                    let cp = cur.slice();
                    cp[j] = 1; // 노드를 방문
                    if (cache2[JSON.stringify(cp)] !== undefined) continue;

                    // 상태가 처음 방문이라면
                    cache2[JSON.stringify(cp)] = true;

                    // 양, 늑대 상태 갱신
                    let newSheep = cache[JSON.stringify(cur)] + (info[j] == 0 ? 1 : -1);
                    cache[JSON.stringify(cp)] = newSheep;
                    cache3[JSON.stringify(cp)] = cache3[JSON.stringify(cur)] + (info[j] == 0 ? 1 : 0);

                    // 큐에 추가
                    queue.push(cp);
                }
            }
        }
    }

    // 최대 양의 수 계산
    for (let i in cache3) {
        answer = Math.max(answer, cache3[i]);
    }

    return answer;
}
