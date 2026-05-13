const fs = require('fs');

const data = fs.readFileSync('sampledata.json', 'utf8');  //readFileSync is an asynchronous function, preferred when using json file

const jsonData = JSON.parse(data);          //convert the data in sampledata.json file into JSON format

console.log(jsonData.username);
console.log(jsonData.password);
console.log(jsonData);