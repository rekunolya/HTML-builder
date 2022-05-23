const fs = require('node:fs');
const path = require('path');
const process = require('process');
const readline = require('readline');
const {stdin: input, stdout: output} = require('process');

let writeFile = fs.createWriteStream(path.join(__dirname, 'test.txt'));
const r1 = readline.createInterface({input, output});

r1.setPrompt('Enter message \n');
r1.prompt();
r1.on('line', (answer) => {

  if(answer === 'exit') {
    r1.close();
    return;
  }
  console.log('you entered: ' + answer.toString());
  writeFile.write(answer + '\n');
  r1.prompt();
});

process.on('exit', () => {
  console.log('See you later');
  writeFile.close();
});
