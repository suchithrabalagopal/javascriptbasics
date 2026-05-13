const fs = require('fs');       // module in js for file handling

fs.readFile('sample.txt', 'utf8', (err, data) => { //readFile is a build-in function, utf-8 converts data into readable format;(err, data) is the Callback function executed after reading 
    if (err) {
        console.log(err);
        return; // Stops the execution if there's an error
    }

    console.log(data);
});

fs.writeFile('output.txt', 'Playwright Test Passed', (err) => {   //writeFile is a build-in function
    if (err) {
        console.log(err);
        return;
    }

    console.log('File written successfully');
});

fs.appendFile('output.txt', '  Playwright Test Passed Again', (err) => {   //writeFile is a build-in function
    if (err) {
        console.log(err);
        return;
    }

    console.log('File appended successfully');
});