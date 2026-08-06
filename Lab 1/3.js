// app.js
const fs = require('fs');

const content = 'This file was created automatically by Node.js!';

// 1. Write data to a file
fs.writeFile('example.txt', content, (err) => {
  if (err) {
    return console.error('Error writing file:', err);
  }
  console.log('File successfully written!');

  // 2. Read data from the file (nested inside callback to ensure order)
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
      return console.error('Error reading file:', err);
    }
    console.log('File content read:', data);
  });
});