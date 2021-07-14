const http = require('http');
const url = require('url');

const routes = require('./routes');


const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);
  console.log(`Request Method: ${request.method} | Endpoint: ${parsedUrl.pathname}`)

  request.query = parsedUrl.query

  const route = routes.find(routeObject => (
    routeObject.endpoint === parsedUrl.pathname &&
    routeObject.method === request.method
  ));

  if(route) {
    route.handler(request, response);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`)
  }
});


server.listen(3333, () => {
  console.log('Server started at http://localhost:3333')
})