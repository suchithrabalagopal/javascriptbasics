const fs = require('fs');

const data = fs.readFileSync('sampledataArray.json', 'utf8');  //readFileSync is an asynchronous function, preferred when using json file

const jsonData = JSON.parse(data);          //convert the data in sampledata.json file into JSON format

console.log(jsonData[0].name);
console.log(jsonData[1].id);
console.log(jsonData[1]);