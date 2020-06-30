const getRandomLetter = (str) => {
    let result = '';
    if (typeof str === 'string') {
        for (let i = 0; i < 1; i++) {
            const randomLetter = Math.floor(Math.random() * str.length);
            result += str.charAt(randomLetter);
        }

        return result;
    }

    throw new Error("invalid value");
};

let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

getRandomLetter(str);
