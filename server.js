require('dotenv').config();
const http = require('http');
const app = require('./server/app-express');

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});