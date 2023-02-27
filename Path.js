const path = require('node:path');



const f1 = path.basename('C:\\temp\\myfile.html');
const f2 = path.dirname('C:\\temp\\myfile.html');
const f3 = path.extname(__filename);


console.log(__filename, f3);

