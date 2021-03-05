import solution from '../problems/383';

const main_problem_cases = [
    ["nicole", "icolen", true],
    ["nicole", "lenico", true],
    ["nicole", "coneli", false],
    ["aabaaaaabaab", "aabaabaabaaa", true],
    ["abc", "cba", false],
    ["xxyyy", "xxxyy", false],
    ["xyxxz", "xxyxz", false],
    ["x", "x", true],
    ["x", "xx", false],
    ["x", "", false],
    ["", "", true]
];

const bonus_one_cases = [
    ["abc", 1],
    ["abcabcabc", 3],
    ["abcabcabcx", 1],
    ["aaaaaa", 6],
    ["a", 1],
    ["", 1]
]

test.each(main_problem_cases)(`"%s" should match "%s": %p`, (root, contains, result) => {
    expect(solution(root, contains)).toBe(result);
});

test.each(bonus_one_cases)(`"%s" should repeat itself "%d" times`, (root, result) => {
    expect(solution(root)).toBe(result);
});