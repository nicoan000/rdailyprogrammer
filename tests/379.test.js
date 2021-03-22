import solution from '../problems/379';

const cases = [
    [0, 0],
    [10000, 0],
    [10009, 0],
    [10010, 1],
    [12000, 200],
    [56789, 8697],
    [1234567, 473326]
];

test.each(cases)(`"%n" should result in %n`, (n, result) => {
    expect(solution(n)).toBe(result);
});