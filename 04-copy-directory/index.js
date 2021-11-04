const fs = require('fs');
const path = require('path');
const pathToDirectory = path.join(__dirname, 'files');

function copyFiles(currentDirectory) {

  fs.mkdir(currentDirectory + '-copy', {recursive: true},(err) => {
    if(err) throw err;
  });

  fs.readdir(currentDirectory, {withFileTypes : true}, (err, files) => {

    if(err) throw err;

    for (let file of files){

      if(file.isFile()){
        fs.createReadStream(`${currentDirectory}/${file.name}`)
          .pipe(fs.createWriteStream(`${currentDirectory}-copy/${file.name}`));
      }

    }

  });
}

copyFiles(pathToDirectory);