const http = require('http')

const server = http.createServer((req,res) => {
  if (req.url === '/') {
    res.end('welcomeeeeeee')
  }
  if(req.url === '/about') {
    res.end('about meeeeeee')
  }
res.end(`
  <h1>Ooops</h1>
  <p>we cant seem to find the page you are looking for</p>
  <a href="/"> back home</a>
  `)
})

server.listen(4000)