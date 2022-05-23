const fs = require('node:fs');
const path = require('path');
const folder = '03-files-in-folder/secret-folder';

fs.readdir(folder, (err, files) => {
  if(err) throw err;
  files.forEach(file => {
    fs.stat(path.join(__dirname, 'secret-folder', file), (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }
      if(stats.isFile()) {
        console.log(path.basename(file, path.extname(file)) + ' - ' + path.extname(file.toString()) + ' - ' + stats.size + 'b');
      }
    });
  });
});
  