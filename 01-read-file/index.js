const fs = require('node:fs');

fs.readFile(
  'C:\\Users\\annak\\Documents\\my projects\\rsschool2024Q4\\HTML-builder\\HTML-builder\\01-read-file\\text.txt',
  (error, data) => {
    if (error) return console.log('error');
    console.log(data.toString());
  },
);
