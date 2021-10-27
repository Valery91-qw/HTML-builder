const fs = require('fs');
const path = require('path');

const fullPath = path.join(__dirname, 'text.txt');

let readStream = fs.createReadStream(fullPath, 'utf8');

readStream.on('data', ( buffer ) => {
  console.log(buffer);
});
readStream.on('error', (err) => {
  console.log(err);
});
