const fs = require('fs');
const path = require('path');
const pathToDirectory = path.join(__dirname, 'files');
const pathToCopy = path.join(__dirname, 'files-copy');


function copyFiles(fromDirectory, toDirectory) {
  fs.access(toDirectory,  (err) => {
    if(!err) {
      fs.readdir(toDirectory, (err, files) => {

        for (let file of files) {
          fs.rm(`${toDirectory}/${file}`, () => {
            fs.readdir(fromDirectory, {withFileTypes : true}, (err, files) => {

              if(err) throw err;

              for (let file of files){

                if(file.isFile()){
                  fs.createReadStream(`${fromDirectory}/${file.name}`)
                    .pipe(fs.createWriteStream(`${toDirectory}/${file.name}`));
                }
              }
            });
          });
        }
      });
    } else {
      fs.mkdir(toDirectory, {recursive: true},(err) => {
        if(err) throw err;

        fs.readdir(fromDirectory, {withFileTypes : true}, (err, files) => {

          if(err) throw err;

          for (let file of files){

            if(file.isFile()){
              fs.createReadStream(`${fromDirectory}/${file.name}`)
                .pipe(fs.createWriteStream(`${toDirectory}/${file.name}`));
            }
          }
        });
      });
    }
  });

}

copyFiles(pathToDirectory, pathToCopy);