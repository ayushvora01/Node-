const Child_Process = require('child_process');

Child_Process.execSync('calc');
Child_Process.execSync('start chrome https://github.com/ayushvora01/React-Native');
console.log('output' + Child_Process.execSync('node demo.js'));