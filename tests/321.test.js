import solution from '../problems/321';

const cases = [
    ["12:14", "It's twelve fourteen pm."],
    ["00:59", "It's twelve fifty nine am."],
    ["01:01", "It's one oh one am."],
    ["05:23", "It's five twenty three am."],
    ["14:34", "It's two thirty four pm."],
    ["18:45", "It's six fourty five pm."],
    ["23:55", "It's eleven fifty five pm."],
];

test.each(cases)(`converts %s into word form, resulting in: %s`, (a, b) => {
    expect(solution(a)).toBe(b);
});