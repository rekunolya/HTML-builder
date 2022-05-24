const fs = require('fs');
const path = require('path');
const folder = '04-copy-directory/files';
const newFoder = '04-copy-directory/files-copy';

fs.stat(newFoder, (err, stats) => {
  if(err) {
    fs.mkdir(newFoder, err => {
      if(err) throw err;
      console.log('The folder successfully create');
    });
  } else {
    fs.readdir(newFoder, (err, files) => {
      if(err) throw err;
      files.forEach(file => {
        fs.unlink(path.join(__dirname, 'files-copy', file), err => {
          if(err) throw err;
          //console.log('файл успешно удален');
        });
      });
    }); 
  }
  fs.readdir(folder, (err, files) => {
    if(err) throw err;
    files.forEach(file => {
      fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file), err => {
        if(err) throw err;
        //console.log('files successfully copied');
      });
    });
  });
});