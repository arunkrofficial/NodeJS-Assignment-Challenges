const os = require('os');

const osName = os.platform();
const osRelease = os.release();

console.log('OS Name:', osName);
console.log('OS Release Version:', osRelease);
