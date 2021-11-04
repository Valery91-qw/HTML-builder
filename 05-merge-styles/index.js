const fs = require('fs');
const path = require('path');
const pathToDirectory = path.join(__dirname, 'styles');

function createBundle(currentPath) {
  fs.readdir(currentPath, {withFileTypes: true}, (err, files) => {
    if(err) throw err;
        
    const allCorrectFiles = [];
    
    for (let file of files) {
      if(file.name.match(/.css/)) allCorrectFiles.push(file.name);
    }

    console.log(allCorrectFiles);
  });
}

createBundle(pathToDirectory);