const fs = require('fs');
const readline = require('readline');
const path = require('path');
const pathToTxt = path.join(__dirname, 'text.txt');

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Enter your text: '
});

readLine.prompt();

readLine.on('line', line => {
  if(line.trim() === 'exit') {
    readLine.close();
  }
  else {
    fs.appendFile(pathToTxt, line + '\n', (err) => {
      if(err) throw 'Something wrong';
    });
  }
});
readLine.on('close', () => {
  console.log('\nGoodbye');
});