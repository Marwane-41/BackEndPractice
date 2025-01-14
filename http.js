// set up the web server : 


const http = require('http')

const server = http.createServer((req,res) =>{

    if(req.url ==='/'){
        res.end('welcome to our page')
        return
    }
    if(req.url === '/about'){
        res.end("short story about us ")
        return
    }
    res.end(`
        <h1>oops!!</h1>
        <p> we can't find the page </p>
        <a href="/"> home page </a>
        `)
})

server.listen(2000)