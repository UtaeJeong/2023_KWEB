const probability = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1];
let LV = 0;
let trial = 0;

const getRandomBinaryResult = ratio => {
    const randomNum = Math.floor(Math.random() * 100);

    return (randomNum < ratio);
};

const tryLevelUp = () => {
    const iterationId = setInterval(() => {
        trial++;
        const completion = getRandomBinaryResult(probability[LV]);

        if (completion)
        {
            LV++;
            document.getElementById('current-level').innerText = LV;
            document.getElementById('gauge-bar').style.width = LV * 10 + '%';
        }

        document.getElementById('attempts').innerText = trial;

        if (LV >= 10)
        {
            clearInterval(iterationId);
        }
        
    }, 50);
};