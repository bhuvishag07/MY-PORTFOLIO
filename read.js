import fs from 'fs'; import pdf from 'pdf-parse/lib/pdf-parse.js'; const dataBuffer = fs.readFileSync('../updated cv.pdf'); pdf(dataBuffer).then(data => console.log(data.text)).catch(console.error);
