const fs = require('fs');
const path = require('path');
const pathToDirectory = path.join(__dirname, 'secret-folder');

function listOfFiles(currentDirectory) {

  fs.readdir(currentDirectory, {withFileTypes : true}, (err, files) => {

    if(err) throw err;

    for (let file of files){

      if(file.isDirectory()) {
        listOfFiles(path.join(currentDirectory,  file.name));
      }

      if(file.isFile()){
        console.log(file.name);
      }
    }
  });
}

listOfFiles(pathToDirectory);

