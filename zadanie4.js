const http = require('http');
const student = require('./zadanie1');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(`Server is running on ${PORT}\n`);
    res.end(`My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}`);
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

