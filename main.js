const cliProgress = require('cli-progress');
const _colors = require('colors');
import run from './problems/379';

console.log('starting script');
const b1 = new cliProgress.SingleBar({
    format: 'CLI Progress |' + _colors.cyan('{bar}') + '| {percentage}% || {value}/{total} Chunks || Speed: {speed}\n\n',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
});

let res;
let i = 0;
let k = 0;
let intervals = 1;
let trials = 1;
let need_bar = false;
let time_lengths = [];

if (need_bar) {
    b1.start(trials * intervals, 0, {
        speed: "N/A"
    });
}

while (k !== trials) {
    let initial_time = new Date();
    while (i !== intervals) {
        res = run(1234567);
        i++;
        b1.increment();
    }
    let final_time = new Date();
    time_lengths.push(final_time - initial_time);
    k++;
    i = 0;
}

if (need_bar) {
    b1.stop();
}
console.log('result ', res);
console.log('average time: ', time_lengths.reduce((x, y) => x + y, 0) / time_lengths.length);