const http = require('http');
const student = require('./zadanie6');

const PORT = 3000;

const requestListener = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><head><title>About student</title></head><body>');
    res.write(`<p>My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}</p>`);
    res.end('</body></html>');
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
