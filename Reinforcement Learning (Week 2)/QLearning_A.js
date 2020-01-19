// Exercise Reinforcement Learning
// Sub-exercise A

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

const Q = Array(NUM_STATES).fill().map(() => Array(NUM_STATES).fill(0));

const [A, B, C, D, E, F] = [0, 1, 2, 3, 4, 5];
const episodes = [
    [C, D, B, F],
    [C, D, E, F],
    [C, D, B, F],
    [C, D, E, F],
];

const maxFuture = (s) => Math.max(...Q[s]);

const calculateQ = (s, a) => Q[s][a] + ALPHA*(R[s][a] + GAMMA*maxFuture(a) - Q[s][a]);

const runEpisode = (episode) => {
    for (let i = 0; i < episode.length - 1; ++i) {
        const [s, a] = episode.slice(i, i+2);
        Q[s][a] = calculateQ(s, a);
    }
}

const printMatrix = (matrix) => matrix.forEach((row) => console.log(row));

episodes.forEach(runEpisode);

printMatrix(Q);
