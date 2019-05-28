const http = require('http');

const port = 4000

http.createServer((req, res) => {
    res.write('Welcome to this Server!')
    res.end()
}).listen(port)


console.log(`Server is running at ${port}`)