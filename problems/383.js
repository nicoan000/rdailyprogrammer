// https://www.reddit.com/r/dailyprogrammer/comments/ffxabb/20200309_challenge_383_easy_necklace_matching/

const root = "";
const contains = "";

export default (root, contains) => {
    let i = 0;
    let appearences = 0;
    let doesMatch = false;
    let modifiedString = root;
    if (root == "") {
        appearences++;
        doesMatch = true;
    }
    while (i < root.length) {
        if (modifiedString == root) {
            appearences++;
        }
        if (modifiedString == contains) {
            doesMatch = true;
        }

        modifiedString = modifiedString.slice(1) + modifiedString[0];
        i++;
    }

    if (contains || contains == "") {
        return doesMatch;
    } else {
        return appearences;
    }
};


// const recursion = (str, matches) => {
//     if (matches && str == input) {
//         return matches;
//     } else {
//         if (!matches) {
//             matches = 0;
//         }
//         const firstLetter = str.charAt(0);
//         const wordMinusFirstLetter = str.slice(1);
//         return recursion(
//             wordMinusFirstLetter + firstLetter,
//             (wordMinusFirstLetter + firstLetter) == input ? matches + 1 : matches
//         );
//     }
// };

// recursion("aaaa");