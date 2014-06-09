var exists = require('fs').existsSync;
var extname = require('path').extname;
var lame = __dirname + '/lame.exe';
var spawn = require('child_process').spawn;

function write(str, dy) {
  if (dy) process.stdout.moveCursor(0, dy);
  process.stdout.write(str);
}

module.exports = function(src, dest, cb) {
  if (arguments.length == 2 && typeof dest == 'function') {
    cb = dest;
    dest = src.substr(0, src.length - extname(src).length) + '.mp3';
  }
  if (!exists(src)) {
    cb(new Error('lame-win: source not found'));
    return;
  }

  var child = spawn(lame, ['-V0', '-b', '160', src, dest]);

  var count = 0;
  child.stderr.on('data', function(buf) {
    buf = String(buf);
    switch(++count) {
      case 1:
        write(buf.split('\n').splice(0, 6).join('\n'));
        break;
      case 2:
        write(buf, -1);
        break;
      default:
        write(buf, -9);
    }
  });
  child.on('close', function(code) {
    if (code != 0) var err = new Error('lame-win: encoding error');
    cb(err || null);
  });
}
