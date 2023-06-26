const fs = require('fs');

fs.unlink('nodejs_architecture.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File Deleted Successfully');
});
