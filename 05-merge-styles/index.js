const fs = require('fs');
const path = require('path');
const pathToDirectory = path.join(__dirname, 'styles');
const pathToBundle = path.join(__dirname, 'project-dist', 'bundle.css');

function createBundle(currentPath) {

  fs.access(pathToBundle,() => {
    fs.rm(pathToBundle, () => {
    });
  });

  fs.readdir(currentPath, {withFileTypes: true}, (err, files) => {
    if(err) throw err;

    const allCorrectFiles = [];

    for (let file of files) {
      if(file.name.match(/.css$/)) {
        allCorrectFiles.push(file.name);
      }
    }

    for (let file of allCorrectFiles) {
      fs.createReadStream(`${currentPath}/${file}`, 'utf8')
        .on('data', chank => {
          fs.appendFile(pathToBundle, chank, (err) => {
            if(err) throw err;
          });
        });
    }
  });
}

createBundle(pathToDirectory);