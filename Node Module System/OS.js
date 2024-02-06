const os = require('os');
console.log(os.arch()); // architecture (x64 or x32)
console.log(os.platform()); // OS (win32, darwin, linux)
console.log(os.cpus()); // CPU information
console.log(os.freemem()); // free memory
console.log(os.totalmem()); // total memory
console.log(os.homedir()); // home directory
console.log(os.hostname()); // hostname
console.log(os.networkInterfaces()); // network interfaces