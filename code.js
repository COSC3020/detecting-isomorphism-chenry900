import java.util.PriorityQueue;


are_isomorphic(graph1, graph2) {
    var DiGraph1 = dijkstra(graph1, 0);
    var DiGraph2 = dijkstra(graph2, 0);
    if (DiGraph1.length != DiGraph2.length)
            return false;
    for(var out = 0; out < DiGraph1.length; out++) {
        for (var i = 0; i < DiGraph1.length; i++) {
            if (DiGraph1[out][i] != DiGraph2[out][i])
                return false;
        }
    }
    return true;
}
//This assumes that dijkstra's works and compairs the 2 graph distances to check if they are isomorphic

function dijkstra(graph, sourceNode) {
    var DijMatrix = [];
    boolean visited = [];
    var check, dist;
    var inf = 999;
    PriorityQueue<integer> priority = new PriorityQueue<>();

    for (var i = 0; i < graph.length; i++) {
        if (i == 0){
            DijMatrix[i] = 0;
            visited.push(true);
        }
        else {
            DijMatrix[i] = inf;
            visited.push(false);
        }
    }
    priority.add(0, 0);

    while (!priority.isEmpty()) {
        check = priority.poll();
        for (var i = 0; i < graph.length; i++) {
            if (graph[check][i] > 0) {
                dist = DijMatrix[check] + graph[check][i];
                if (dist < DijMatrix[i]) {
                    DijMatrix[i] = dist;
                    if (!visited[i]) {
                        priority.add(i, DijMatrix[i]);
                        visited[i] = true;
                    }
                }
            }
        }
    }
    return DijMatrix;
}
