# Algorand Reorder Seed Words

## Overview

A script to fix simple human errors in writing down seed phrases for Algorand.

## Features

Tests seed phrases by swapping each word with each other, and then moving each word to all possible positions.

## Requirements

node & npm. Find out how to install these on your platform [here](https://nodejs.org/).

## Usage

```
git clone git@github.com:d13co/algorand-reorder-seed-words.git
cd algorand-reorder-seed-words
npm install
node index.js your 25 seed words here
```

## Security & Dependencies

The code does not include any network code or any other way to exfiltrate your seed phrase.

The only package imported is the official JS algorand sdk `algosdk`, which is used to validate the seed phrase.

## Example output

Correct seed phrase: merit kiwi deposit enough barely hollow salad labor bench video add legal supreme pig jar there donate again burger dove cost trade crouch absorb when

Swapping words 2 (kiwi) with 4 (enough) gives us: merit enough deposit kiwi barely hollow salad labor bench video add legal supreme pig jar there donate again burger dove cost trade crouch absorb when

```

$ node index.js merit enough deposit kiwi barely hollow salad labor bench video add legal supreme pig jar there donate again burger dove cost trade crouch absorb when
Starting recovery attempt
Trying transpose=1 .........................
Trying transpose=2 ..
Found correct seed:
merit kiwi deposit enough barely hollow salad labor bench video add legal supreme pig jar there donate again burger dove cost trade crouch absorb when
```

## Tests

We cover all use cases in tests:

```
$ npm run test

> algorand-reorder-seed-words@1.0.0 test
> node test.js

Testing transpositions from 0........................OK
Testing transpositions from 1........................OK
Testing transpositions from 2........................OK

  ----8<----

Testing moves from 22........................OK
Testing moves from 23........................OK
Testing moves from 24........................OK
All tests OK
```

## Contributions

If this helps you recover your funds, consider sending us a cup of coffee or two at the following address:

```
DTHIRTEENNLSYGLSEXTXC6X4SVDWMFRCPAOAUCXWIXJRCVBWIIGLYARNQE
```

## Support & Socials

This code is provided as-is.

If we aren't busy we will be happy to help you out. 

You can get in touch on [Twitter](https://twitter.com/d13_co/) or post on our subreddit: [/r/D13](https://reddit.com/r/D13).
