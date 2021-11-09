const fs = require('fs');
const path = require('path');
const pathToDirectory = path.join(__dirname, 'secret-folder');

function listOfFiles(currentDirectory) {

  fs.readdir(currentDirectory, {withFileTypes : true}, (err, files) => {

    if(err) throw err;

    for (let file of files){
      if(file.isFile()){
        fs.stat(`${currentDirectory}/${file.name}`, (err, stat) => {
          let [name, ext] = file.name.split('.');
          console.log(`${name !== '' ? name : 'No name'} - `,`${ext !== undefined ? ext : 'No ext'}`,` - ${(stat.size / 1000)} kb`);
        });
      }
    }
  });
}

listOfFiles(pathToDirectory);

