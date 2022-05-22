let path = require('path');
let fs = require('fs');
let bundle = path.join(__dirname, 'project-dist', 'bundle.css');
let css = path.join(__dirname, 'styles');
fs.readdir(css, 'utf-8', function (error, files) {
    if (error) { throw error; }
    fs.writeFile(bundle, '', function (error) {
        if (error) {
            throw error;
        }
    });
    files.forEach(function (file) {
        if (path.parse(path.join(css, file)).ext === '.css') {
            let stream = fs.createReadStream(path.join(css, file));
            stream.on('data', function (data) {
                fs.appendFile(bundle, data, function (error) {
                    if (error) {
                        throw error;
                    }
                });
            });
        }
    });
});