class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue() {
        if (!this.head) return null;
        const value = this.head.value;
        this.head = this.head.next;
        if (!this.head) this.tail = null;
        return value;
    }

    isEmpty() {
        return this.head === null;
    }
}

function solution(maps) {
    var n = maps.length; // 행
    var m = maps[0].length; // 열
    var dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    if (n > 1 && m > 1) {    
        if (maps[n - 2][m - 1] === 0 && maps[n - 1][m - 2] === 0) {
            return -1; // 상대팀 진영이 막혀 있으면 바로 return
        }
    }
        

    var bfs = () => {
        var queue = new Queue();
        queue.enqueue([0, 0, 1]);
        var visited = Array.from({ length: n }, () => Array(m).fill(false));
        visited[0][0] = true;

        while (!queue.isEmpty()) {
            var [row, col, distance] = queue.dequeue();

            if (row === n - 1 && col === m - 1) {
                return distance;
            }

            for (var [r, c] of dir) {
                var newRow = row + r;
                var newCol = col + c;

                if (
                    newRow >= 0 && newRow < n &&
                    newCol >= 0 && newCol < m &&
                    maps[newRow][newCol] === 1 &&
                    !visited[newRow][newCol]
                ) {
                    queue.enqueue([newRow, newCol, distance + 1]);
                    visited[newRow][newCol] = true;
                }
            }
        }
        return -1;
    };

    return bfs();
}
