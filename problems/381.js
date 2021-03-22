// https://www.reddit.com/r/dailyprogrammer/comments/dv0231/20191111_challenge_381_easy_yahtzee_upper_section/

export default (rolls) => {
    const sorted_rolls = rolls.sort((a, b) => b - a);
    const scores = sorted_rolls.reduce((acc, item) => {
        const roll_index = acc.findIndex(x => x.roll == item);
        if (roll_index == -1) {
            return [
                ...acc,
                {roll: item, count: 1}
            ]
        }
        acc[roll_index].count++;
        return acc;
    }, []);
    return scores.map(x => x.roll * x.count).sort((a, b) => b - a)[0];
}