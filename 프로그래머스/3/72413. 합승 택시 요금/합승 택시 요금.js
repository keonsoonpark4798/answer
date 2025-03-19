function solution(n, s, a, b, fares) {
    var answer = Infinity;
    var graph = createGraph(fares);
    var sStart = dijkstra(graph,s);
    var aStart = dijkstra(graph,a);
    var bStart = dijkstra(graph,b);
    
    const allNodes = new Set([...Object.keys(sStart), ...Object.keys(aStart), ...Object.keys(bStart)]);
    allNodes.forEach(node =>{
        let totalWeight = 0;
        
        if(sStart[node] !== null && aStart[node] !== null & bStart[node] !== null) 
            totalWeight = sStart[node]+ aStart[node]+ bStart[node];
        
        if(totalWeight < answer){
            answer = totalWeight;
        }
    })
    return answer;
}
function dijkstra(graph, start){
    let distances = {};
    let visited = {};
    let nodes = new priorityQueue();
    
    for(let vertex in graph){
        distances[vertex] = Infinity;
         nodes.enqueue(vertex, Infinity);
    }
    
    distances[start] = 0;
    nodes.enqueue(start, 0);
    
    while(!nodes.isEmpty()){
        let currentVertex = nodes.dequeue().element;
        visited[currentVertex] = true;
        
        for(let neighbor in graph[currentVertex]){
            if(visited[neighbor]) continue;
            
            let distance = graph[currentVertex][neighbor];
            let newDist = distances[currentVertex] + distance;
            
            if(newDist < distances[neighbor]){
                distances[neighbor] = newDist;
                nodes.enqueue(neighbor, newDist);
            }
        }
    }
    return distances;
}
function createGraph(wires) {
	let graph = {};

    wires.forEach(([start, end, weight]) => {
    if (!graph[start]) graph[start] = {};
    if (!graph[end]) graph[end] = {};

    graph[start][end] = weight;
    graph[end][start] = weight;
    });

	return graph;
}

class priorityQueue{
    constructor(){
        this.items = [];
    }
    enqueue(element, priority){
        let queueElement = {element, priority};
        let added = false;
        
        for(let i = 0; i< this.items.length;i++){
            if(queueElement.priority < this.items[i].priority){
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if(!added){
            this.items.push(queueElement);
        }
    }
    
    dequeue(){
        return this.items.shift();
    }
    isEmpty(){
        return this.items.length === 0;
    }
}


