const fs = require('fs');

let readStream = fs.createReadStream('./01-read-file/text.txt', 'utf8');

readStream.on('data', ( buffer ) => {
  console.log(buffer);
});
readStream.on('error', (err) => {
  console.log(err);
});
