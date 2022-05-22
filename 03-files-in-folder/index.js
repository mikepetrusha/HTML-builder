let path = require('path');
let fs = require('fs');
let infoFiles = function (file) {
    let dat = [];
    if (file.isFile()) {
        fs.stat(path.resolve(__dirname, 'secret-folder', file.name), function (erroror, stats) {
            if (erroror) {
                return console.log(erroror);
            }
            dat.push(file.name.split('.').slice(0, -1).join('.'));
            dat.push(path.extname(file.name).slice(1));
            dat.push((Math.round(stats.size / 1024)) + 'Kb');
            console.log(dat.join(' - '));
        });
    }
};
fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, function (erroror, files) {
    if (erroror) {
        return console.log(erroror);
    }
    files.forEach(item => {
        infoFiles(item);
    });
});