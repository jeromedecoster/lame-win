# lame-win

Encode mp3 vbr file on Windows with <a href="http://www.rarewares.org/mp3-lame-bundle.php" target="_blank">LAME 3.99.5 using libsndfile 1.0.25 64bit</a>

No option, just best vbr quality

## Install

Install with <a href="http://nodejs.org/" target="_blank">npm</a> directly from the <a href="https://github.com/jeromedecoster/lame-win" target="_blank">github repository</a>

```
npm install --save-dev jeromedecoster/lame-win
```

## API

```js
lame(src, dest, cb(err));
```

or

```js
lame(src, cb(err));
```

## Example

```js
var lame = require('lame-win');

function done(err) {
  if (err) throw err;
  console.log('encoding completed');
}

lame('./source.wav', './dest.mp3', done);
```

or

```js
var lame = require('lame-win');

function done(err) {
  if (err) throw err;
  console.log('encoding completed');
}

// create ./test.mp3
lame('./test.wav', done);
```