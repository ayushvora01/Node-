const File_System = require('fs');

// Read File
let fileContent = File_System.readFileSync('Hello.txt');
console.log('Data of file is: ' +fileContent);

// Write File
File_System.writeFileSync('Hello3.txt', 'I am studing in Marwadi University');
console.log('Data is written in file');

// Append File
File_System.appendFileSync('Hello3.txt', 'We have add this new line');
console.log('File Has Been Appended');

// Delete File
File_System.unlinkSync('Hello3.txt');
console.log("The file has been deleted");

// Create Directory 
File_System.mkdirSync('Hello');
console.log('Directory has been created');

// Delete Directory
File_System.rmdirSync('Hello');
console.log('Directory has been deleted');

// Rename File
File_System.renameSync('Hello.txt', 'Hello2.txt');
console.log('File has been renamed');
