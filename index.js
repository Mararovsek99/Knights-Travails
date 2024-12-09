class Node{
    constructor(position,parent){
        this.position = position;
        this.moves = this.possibleMoves(position);
        this.parent = parent;

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
        this.visitedPositions = []; // must save all already visited positons
        this.findTarget = false;
        this.path = null;
    }
    Pathfinder(startPosition,targetPosition){
        let queue = []; //prepared queue for later processing in FIFO method.

        let startNode = new Node(startPosition); // this will be main element

        queue.push(startNode);

        this.visitedPositions.push(startNode);

        let copyThis = this;

        //find path function
        function BFS(procesNode){  
            
            
            //get all possible moves from this node
            let nextMoves = procesNode.moves;   

            //for all next possible moves, check if this is target,
            //if its not target then check if its been already visited,
            // if its not already visited add moveNode to the queue
            nextMoves.forEach( move => {
                //make node for new move
                let newMove = new Node(move,procesNode);
                //if new move is a target position, we must recreate the path
                if (newMove.position[0] === targetPosition[0] && newMove.position[1] === targetPosition[1]) {

                    copyThis.findTarget = true;
                    

                    let solution = copyThis.createPath(startNode,newMove);
                    return solution;
                }
                //if its not a target, we chech if its been already visited
                let isVisited = copyThis.visitedPositions.some(position =>
                    position[0] === newMove.position[0] && position[1] === newMove.position[1]
                );
                if (isVisited) {
                    return;
                }
                //if its not been visited, we add node in visitedPosition array, and add move to the queue
                else{
                    copyThis.visitedPositions.push(newMove);
                    queue.push(newMove);
                }
            })
            if (copyThis.findTarget === false) {
                //when we have all next moves in the queue,process the next Node in the queue
                forProcesing = queue.shift();
                BFS(forProcesing);
            }
            else{
                return;
            }
            
        }
        let forProcesing = queue.shift();
        BFS(forProcesing);
    }
    createPath(startNode,PathNode){
        
        let path = [PathNode];
        let currNode = PathNode;

        while (currNode.parent) {
            currNode = currNode.parent
            path.unshift(currNode);
            
        }
        let pathPositions = [];
        path.forEach(node =>{
            pathPositions.push(`[${node.position}]`);
        })
        let PathToString = `knightMoves([${startNode.position}],[${PathNode.position}]) == [${pathPositions}]`;
        //we console.log in format: knightMoves([3,3],[2,2]) == [[3,3],[4,1],[2,2]] which we want.
        console.log(PathToString);


        //alternative result:
        let secondVersionString = `You made it in ${path.length - 1} moves! Here's your path: `;
        console.log(secondVersionString);
        path.forEach(node =>{
            console.log(`[${node.position[0]},${node.position[1]}]`);
        })
        
        //second result:You made it in 6 moves! Here's your path: 
        // [7,7]
        // [5,6]
        // [3,5]
        // [1,4]
        // [0,2]
        // [2,1]
        // [0,0]
        

        //end
        return;
    }
}

let testMove = new KnightsTravails;

testMove.Pathfinder([7,7],[0,0]);