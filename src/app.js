import 'dotenv/config'
import * as http from 'http';
import * as fs from 'fs'

const HTTP_PORT = process.env.PORT;

export const httpServer = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === '/') {
    const responseData = JSON.stringify({ greeting: 'Hello World' });
    res.write(responseData);
    res.statusCode = 200;
    res.end();
  }   // GET profile page
  else if (req.url === '/profile') {
    const responseData = JSON.stringify({ data: 'Profile page!' });
    res.write(responseData);
    res.statusCode = 200;
    res.end();
  } else {
    res.statusCode = 404;
    res.write('Page not found!');
    res.end();
  }
});

httpServer.listen(HTTP_PORT, () => {
  console.log(`Start static http server on the ${HTTP_PORT} port!`);
});