import algosdk from 'algosdk';
import { swapWords, moveWord } from './util.js';

let log = true;

export function run(seed, _log = true) {
  return runTranspose(seed, _log) ?? runMove(seed, _log);
}

function runMove(seed, _log = true) {
  let correctSeed;
  for(let distance=1; distance<25; distance++) {
    if (correctSeed = testMove(seed, distance, _log)) {
      return correctSeed;
    }
  }
}

export function testMove(seed, distance, _log = true) {
  log = _log;
  _log && process.stderr.write(`\nTrying move=${distance} `);
  const times = 25;
  for(let i = 0; i < times; i++) {
    _log && process.stderr.write('.');
    const swapped = moveWord(seed, i, (i+distance) % 25);
    if (testSeed(swapped)) {
      _log && console.error(`\nFound correct seed:`)
      const str = swapped.join(' ');
      _log && console.log(str);
      return str;
    }
  }
}

export function runTranspose(seed, _log = true) {
  let correctSeed;
  for(let distance=1; distance<25; distance++) {
    if (correctSeed = testTranspose(seed, distance, _log)) {
      return correctSeed;
    }
  }
}

export function testTranspose(seed, distance, _log = true) {
  log = _log;
  _log && process.stderr.write(`\nTrying transpose=${distance} `);
  const times = 25;
  for(let i = 0; i < times; i++) {
    _log && process.stderr.write('.');
    const swapped = swapWords(seed, i, i+distance);
    if (testSeed(swapped)) {
      _log && console.error(`\nFound correct seed:`)
      const str = swapped.join(' ');
      _log && console.log(str);
      return str;
    }
  }
}

export function testSeed(seed) {
  try {
    algosdk.seedFromMnemonic(seed.join(' '));
    // if it succeeded then the seed is valid
    return true;
  } catch(e) {
    switch(e.message) {
      // expected error:
      case 'failed to decode mnemonic': return false;
      // unexpected errors, ex "the mnemonic contains a word that is not in the wordlist"
      default: die(`Error: ${e.message}`);
    }
  }
}

