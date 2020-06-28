const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

getRandomNumber(1, 5);
getRandomNumber(1, 50);