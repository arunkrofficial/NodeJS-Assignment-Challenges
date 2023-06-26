const fs = require('fs');

const architectureInfo = 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It allows developers to build scalable and high-performance applications by leveraging non-blocking, event-driven I/O. Node.js uses a single-threaded event loop model and provides a rich set of APIs for various I/O operations.';

fs.writeFile('nodejs_architecture.txt', architectureInfo, (err) => {
  if (err) throw err;
  console.log('Node.js architecture information has been added to nodejs_architecture.txt');
});
