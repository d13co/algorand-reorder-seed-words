import { swapWords, moveWord, genSeed } from './util.js';
import { run } from './process.js';

const seed = genSeed().split(' ');

const tests = [
  ['transpositions', swapWords],
  ['moves', moveWord],
];

for(const [testName, preProcess] of tests) {
  for(let left = 0; left < 25; left++) {
    process.stderr.write(`Testing ${testName} from ${left}`);
    for(let right = 0; right < 25; right++) {
      if (left === right) {
        continue;
      }
      const jumbledSeed = preProcess(seed, left, right);
      if (!run(jumbledSeed, false)) {
        throw new Error(`Failed to solve for transposition ${left} <-> ${right}`);
      } else {
        process.stderr.write('.');
      }
    }
    process.stderr.write('OK\n');
  }
}

console.error('All tests OK');
