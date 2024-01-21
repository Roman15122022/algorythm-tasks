const maze = [
    [1, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0],
]

console.log(maze);
/*
const checkPath = (start, end) => {
    let {x: startX, y: startY} = start;
    const {x: endX, y: endY} = end;
    if (maze[endY][endX] !== 0) return false;
    let count = 0;
    while (count < maze.length) {
        for (let i = 0; i < maze[startY].length - 1; i++) {
            if (maze[startY+1][i] === 0 && maze[startY][i] === 0){
                startX = i;
                startY++;
            };
        }
        count++;
    }
    console.log(startX,startY)
    return startX === endX && startY === endY;
}

console.log(checkPath({x: 3, y: 0}, {x: 5, y: 5}))*/


const solution = (start, end) => {
    maze[start.y][start.x] = 5;

    let siblings = getValidSib(start);

    if (siblings.length > 0) {
        for (let i = 0; i < siblings.length; i++) {
            const current = siblings[i];

            const isSolved = current.x === end.x && current.y === end.y;
            const notVisited = maze[current.y][current.x] !== 5;

            if (isSolved || (notVisited && solution(current, end))) {
                return true;
            }
        }
    }
    return false;
}

function getValidSib(cord) {
    let {x, y} = cord;
    let cords = [];

    if (maze[y-1] !== undefined){
        cords.push({x: x, y: y-1, value: maze[y-1][x]})
    }

    if (maze[y+1] !== undefined){
        cords.push({x: x, y: y+1, value: maze[y+1][x]})
    }

    if (maze[y][x-1] !== undefined){
        cords.push({x: x-1, y: y, value: maze[y][x-1]})
    }

    if (maze[y][x+1] !== undefined){
        cords.push({x: x+1, y: y, value: maze[y][x+1]})
    }

    return  cords.filter(item => item.value === 0);
}


console.log(solution({x: 3, y: 0}, {x: 5, y: 5}))
