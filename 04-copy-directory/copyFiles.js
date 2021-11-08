const fs = require('fs');

module.exports.copyFiles = function(fromDirectory, toDirectory) {

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
  
};