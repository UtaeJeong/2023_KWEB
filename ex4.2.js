const displayErrorText = elem => elem.innerText = 'Input Error!';

const displayTimes = () => {
    const num = document.getElementById('number').value;
    const parsedNum = parseInt(num);
    const timesResult = document.getElementById('times-result');

    if (!isFinite(parsedNum) || isNaN(parsedNum))
    {
        return displayErrorText(timesResult);
    }

    if (parsedNum != num)
    {
        return displayErrorText(timesResult);
    }

    if (parsedNum < 1 || parsedNum > 9)
    {
        return displayErrorText(timesResult);
    }

    const result = [];
    for (let i = 1; i <= 9; i++)
    {
        result.push(parsedNum + ' X ' + i + ' = ' + parsedNum * i);
    }

    timesResult.innerText = result.join('\n');
};