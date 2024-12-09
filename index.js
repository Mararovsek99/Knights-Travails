class Node{
    constructor(position){
        this.position = position;
        this.moves = this.possibleMoves(position);

    }
    possibleMoves([a,b]){ //sample like [3,3]
        let possibleMoves = [];     //prepared empty array

        let directions = [[2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]];

        directions.forEach(direction => {
            const [x,y] = direction;

            let possibleMove = [a-x,b-y];
           if (possibleMove[0] > 8 || possibleMove[1] > 8 || possibleMove[0] < 0 || possibleMove[1] < 0 ) {
           }
           else{
            possibleMoves.push(possibleMove);
           }
            
        })
        return possibleMoves;
        
    }
}

class KnightsTravails{
    constructor(){
        this.visitedPositions = [];
    }
    Pathfinder(startPosition,targetPosition){
        let queue = [];

        let startNode = new Node(startPosition);
        queue.push(startNode);

        this.visitedPositions.push(startNode);

        function BFS(startNode){
            let nextMoves = startNode.moves;

            nextMoves.forEach( move => {
                newMove = new Node(move);
                queue.push(newMove);
            })
        }
        BFS(startNode);
    }
}
