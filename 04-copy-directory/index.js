const path = require('path');
const {copyFiles} = require('./copyFiles');
const pathToDirectory = path.join(__dirname, 'files');
const pathToCopy = path.join(__dirname, 'files-copy');

copyFiles(pathToDirectory, pathToCopy);