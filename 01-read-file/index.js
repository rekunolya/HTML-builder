const path = require('path');
let fs = require('node:fs');

let stream = new fs.ReadStream(path.join(__dirname, 'text.txt'),  {encoding: 'utf-8'});
stream.on('readable', function(){
  let data = stream.read();
  if(data != null) console.log(data);
});
stream.on('end', () => {
  console.log('end');
});
stream.on('error', (err) => {
  if(err.code == 'ENOENT') {
    console.log('File not found');
  } else{
    console.error(err);
  }
});

