const fs = require('fs');

const advantages = 'Advantages of Node.js:\n\n- Fast and scalable\n- Non-blocking I/O model\n- Single-threaded event loop\n- Large ecosystem of libraries and modules';

fs.appendFile('nodejs_architecture.txt', `\n\n${advantages}`, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }
  console.log('Advantages appended to nodejs_architecture.txt');
});

fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('Content of nodejs_architecture.txt:');
  console.log(data);
});
