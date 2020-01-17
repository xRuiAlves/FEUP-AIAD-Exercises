// Exercise Reinforcement Learning
// Sub-exercise B

const ALPHA = 1.0;  // taxa de aprendizagem
const GAMMA = 0.8;  // fator de desconto
const NUM_STATES = 6;

const R = [
    [null, null, null, null, 0, null],
    [null, null, null, 0, null, 100],
    [null, null, null, 0, null, null],
    [null, 0, 0, null, 0, null],
    [0, null, null, 0, null, 100],
    [null, 0, null, null, 0, 100],
];

const Q = [
    [null, null, null, null, 400, null],
    [null, null, null, 320, null, 500],
    [null, null, null, 320, null, null],
    [null, 400, 256, null, 400, null],
    [320, null, null, 320, null, 500],
    [null, 400, null, null, 400, 500],
]

const bestFutureState = (s) => {
    let best = 0;
    for (const destiny in Q[s]) {
        if (s === destiny) {
            continue;
        }

        if (Q[s][destiny] > Q[s][best]) {
            best = destiny;
        }
    }

    return parseInt(best, 10);
}

const [A, B, C, D, E, F] = [0, 1, 2, 3, 4, 5];

const path = [];
let curr_state = C;
path.push(curr_state);

let i = 0;

while (curr_state !== F && i++ < 5) {
    curr_state = bestFutureState(curr_state);
    path.push(curr_state);
}

console.log(path);