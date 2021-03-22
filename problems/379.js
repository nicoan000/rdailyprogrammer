// https://www.reddit.com/r/dailyprogrammer/comments/cdieag/20190715_challenge_379_easy_progressive_taxation/

const tax_brackets = [
    {min: 0, max: 10000, rate: 0},
    {min: 10000, max: 30000, rate: .1},
    {min: 30000, max: 100000, rate: .25},
    {min: 100000, max: null, rate: .40},
];

const base_solution = (n, brackets = tax_brackets) => {
    let due = 0;

    tax_brackets.forEach(({min, max, rate}) => {
        if (n >= min) {
            const top_bracket = max && n > max ? max - min : n - min;
            const test = (top_bracket * rate);   
            due += test;
        }
    });

    return Math.floor(due);
};

const optional_solution = () => {
    // work on this later
};

export { base_solution as default, optional_solution };