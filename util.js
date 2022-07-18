import algosdk from 'algosdk';

const { generateAccount, secretKeyToMnemonic } = algosdk;

export function genSeed() {
  return secretKeyToMnemonic(generateAccount().sk);
}

export function swapWords(seed, leftIdx, rightIdx) {
  const nextSeed = [...seed];
  if (rightIdx > seed.length - 1)
    rightIdx = rightIdx % seed.length;
  const [right, left] = [seed[leftIdx], seed[rightIdx]];
  nextSeed[leftIdx] = left;
  nextSeed[rightIdx] = right;
  return nextSeed;
}

export function moveWord(seed, leftIdx, rightIdx) {
  const nextSeed = [...seed];
  const [word] = nextSeed.splice(leftIdx, 1, '');
  if (rightIdx > seed.length - 1)
    rightIdx = (rightIdx + 1) % seed.length
  if (leftIdx < rightIdx)
    rightIdx++;
  nextSeed.splice(rightIdx, 0, word);
  return nextSeed.filter(Boolean);
}
