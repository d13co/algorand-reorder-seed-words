import { testSeed, run } from './process.js';

function die(message, withUsage) {
  console.error(message);
  if (withUsage) {
    const proc = process.argv.slice(0, 2).join(' ');
    console.error(`Example:\n${proc} merit enough deposit kiwi barely hollow salad labor bench video add legal supreme pig jar there donate again burger dove cost trade crouch absorb when`);
  }
  process.exit(1);
}

function getSeed() {
  let seed;
  const args = process.argv[2];
  if (!args) {
    die('Error: expected seed words.', true);
  }
  if (!args.includes(' ')) {
    seed = process.argv.slice(2).map(s => s.trim().toLowerCase()).filter(Boolean);
  } else {
    seed = args.split(' ').map(s => s.trim().toLowerCase()).filter(Boolean);
  }
  if (seed.length !== 25) {
    die(`Invalid seed, expected 25 words but instead found ${seed.length}`);
  }
  return seed;
}

const seed = getSeed();

if (testSeed(seed)) {
  console.error('Seed is valid as provided. Exiting');
  process.exit(0);
}

process.stderr.write('Starting recovery attempt');

if (run(seed, true)) {
  process.exit(0);
}

console.error('\nCorrect seed not found');
