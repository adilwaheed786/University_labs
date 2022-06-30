const http = require('http');
const hostname = '127.0.0.1'
const port = 3000;
const detail={
    name:"Adil Waheed",
    enrollment:"02-131192-082",
    class:"BSE 6A"
}
const detailJSON=JSON.stringify(detail);
const server = http.createServer((req, res) => {
    // const query=req.url;
    res.setHeader('Content-Type', 'text/json');
    res.write(detailJSON);
    res.end();
  })

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  })
  