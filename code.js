import java.util.PriorityQueue;

class DijkstraNode {
    var distance;
    var currentNode;
    
    constructor (node, distance) {
        this.currentnode = node;
        this.distance = distance;
    }
    Node() {
        return currentNode;
    }
    distance() {
        return distance;
    }
    newDistance(distance) {
        this.distance = distance;
    }

}

are_isomorphic(graph1, graph2) {
    var DiGraph1 = dijkstra(graph1, 0);
    var DiGraph2 = dijkstra(graph2, 0);
    if (DiGraph1.length != DiGraph2.length)
            return false;
    for(var out = 0; out < DiGraph1.length; out++) {
        if (DiGraph1[out].distance() != DiGraph2[out].distance())
            return false;
    }
    return true;
}
//This assumes that dijkstra's works and compairs the 2 graph distances to check if they are isomorphic

function dijkstra(graph, sourceNode) {
    var[] Dijkstra = new var[graph.length];
    boolean[] visited = new boolean[graph.length];
    var inf = 999;
    PriorityQueue<DijkstraNode> priority = new PriorityQueue<>(node, node.distance);

    for (var i = 0; i < graph.length; i++) {
        if (i == sourceNode){
            Dijkstra[i] = new DijkstraNode(sourceNode, inf);
            visited[i] = true;
        }
        else {
            Dijkstra[i] = new DijkstraNode(i, inf);
            visited[i] = false;
        }
    }
    priority.add(Dijkstra[sourceNode]);

    while (!priority.isEmpty()) {
        DijkstraNode check = priority.poll();
        for (var i = 0; i < graph.length; i++) {
            if (graph[check.Node()][i] > 0) {
                var newdist = check.distance() + graph[check.Node()][i];
                if (newdist < Dijkstra[check.Node()].distnace()) {
                    Dijkstra[check.Node()].newDistance(newdist);
                    if (!visited[i]) {
                        priority.add(Dijkstra[i]);
                        visited[i] = true;
                    }
                }
            }
        }
    }
    return DijMatrix;
}
