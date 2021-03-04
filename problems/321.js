// https://www.reddit.com/r/dailyprogrammer/comments/6jr76h/20170627_challenge_321_easy_talking_clock/

const test = (num) => {
    const tens = {
        "20": "twenty",
        "30": "thirty",
        "40": "fourty",
        "50": "fifty"
    };

    if (tens[num]) {
        return tens[num];
    } else if (+num >= 21) {
        return `${test(num.charAt(0) + 0)} ${test(0 + num.charAt(1))}`;
    }

    return {
        "00": "twelve",
        "01": "one",
        "02": "two",
        "03": "three",
        "04": "four",
        "05": "five",
        "06": "six",
        "07": "seven",
        "08": "eight",
        "09": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen"
    }[num];
};

export default (input) => {
    let pieces = ["It's"];
    let timeNumArr = input.split(':');

    let suffix;
    if (+timeNumArr[0] <= 11) {
        suffix = 'am';
    } else {
        suffix = 'pm';
        const convertedNum = +timeNumArr[0] - 12;
        timeNumArr[0] = `${convertedNum}`.length > 1 ? `${convertedNum}` : `0${convertedNum}`
    }

    pieces = timeNumArr.reduce((y, x, i) => {
        if (i > 0 && x.charAt(0) == "0") {
            return [
                ...y,
                "oh",
                test(x)
            ]
        }
        return [
            ...y, 
            test(x)
        ]
    }, [...pieces]);

    pieces.push(suffix);
    return pieces.join(' ') + '.';
}