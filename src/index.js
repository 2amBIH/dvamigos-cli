const fs = require('fs');
const path = require('path');
const std = require('./std');

const args = std.parseArguments(process.argv.splice(2));

console.log(args);

function getFiles(directoryPath) {
    return fs
        .readdirSync(directoryPath)
        .map(p => path.join(directoryPath, p))
        .filter(i => fs.statSync(i).isDirectory());
}

function findTemplates(dirPath) {
    return getFiles(dirPath).map(item => require(path.join(item, 'template.json')));
}

const templates = findTemplates(path.join(__dirname, '..', 'templates')).map(t => t.name);

std.indent();
std.line("Following templates are available:", templates);
std.outdent();
std.line("Following templates are available:", templates);