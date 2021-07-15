const http = require('http');
const url = require('url');

const routes = require('./routes');


const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);

  console.log(`Request Method: ${request.method} | Endpoint: ${parsedUrl.pathname}`)

  let { pathname } = parsedUrl;
  let id = null;

  const splitEndpoint = pathname.split('/').filter(Boolean);

  if(splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`;
    id = splitEndpoint[1]
  }
  
  const route = routes.find(routeObject => (
    routeObject.endpoint === pathname &&
    routeObject.method === request.method
    ));
    
    if(route) {
    request.query = parsedUrl.query
    request.params = { id };

    response.send = (status, body) => {
      response.writeHead(status, { 'Content-Type': 'text/html' });
      response.end(JSON.stringify(body));
    }

    route.handler(request, response);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(`Cannot ${request.method} ${pathname}`)
  }
});


server.listen(3333, () => {
  console.log('Server started at http://localhost:3333')
})