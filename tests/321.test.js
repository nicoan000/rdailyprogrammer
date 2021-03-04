import solution from '../problems/321';

const cases = [
    ["12:14", "It's twelve fourteen pm.", "outputs 12:14 in word form"],
    ["00:59", "It's twelve fifty nine am.", "outputs 00:59 in word form"],
    ["01:01", "It's one oh one am.", "outputs 1:01 in word form"],
    ["05:23", "It's five twenty three am.", ""],
    ["14:34", "It's two thirty four pm.", ""],
    ["18:45", "It's six fourty five pm.", ""],
    ["23:55", "It's eleven fifty five pm.", ""],
];

test.each(cases)('test', (a, b, expected) => {
    expect(solution(a)).toBe(b);
});