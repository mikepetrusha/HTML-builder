let path = require('path');
let fs = require('fs');
let writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));
let { stdout, stdin, exit } = require('process');
stdout.write('Введите текст:');
stdin.on('data', (data) => {
    if (data.toString().trim() === 'exit') {
        endFunc();
    }
    writeStream.write(data);
});
process.on('SIGINT', endFunc);
function endFunc() {
    stdout.write('До свидания!');
    exit();
}