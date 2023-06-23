const ROW_MIN = 0;
const ROW_MAX = 6;
const COL_MIN = 0;
const COL_MAX = 7;
const currentPosition = { row: 5, col: 0 };

const getElementByPosition = position => {
    const cells = document.getElementsByClassName('cells')[position.row];
    return cells.getElementsByClassName('cell')[position.col];
};

const getNewPositionByKey = key => {
    const position = {
        row: currentPosition.row,
        col: currentPosition.col,
    }
    switch (key)
    {
        case 'ArrowUp': position.row--;
        break;

        case 'ArrowDown': position.row++;
        break;

        case 'ArrowLeft': position.col--;
        break;

        case 'ArrowRight': position.col++;
        break;
    }

    return position;
};

const isPositionInRange = position => {
    return (position.row >= ROW_MIN) && (position.row <= ROW_MAX) && (position.col >= COL_MIN) && (position.col <= COL_MAX);
}

const isPositionWall = position => {
    return getElementByPosition(position).classList.contains('wall');
}

document.addEventListener('keyup', event => {
    getElementByPosition(currentPosition).classList.remove('current');

    const newPosition = getNewPositionByKey(event.code);
    if (isPositionInRange(newPosition) && !isPositionWall(newPosition))
    {
        currentPosition.row = newPosition.row;
        currentPosition.col = newPosition.col;
    }

    const newElement = getElementByPosition(currentPosition);
    newElement.classList.add('current');
    if (newElement.classList.contains('target'))
    {
        alert('You escaped!');
    }
});
