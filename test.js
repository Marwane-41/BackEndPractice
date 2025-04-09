const http = require('http')
const fs  = require('fs')


let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
];


const server = http.createServer((req,res)=>{

    // when link has / 
    if(req.url === '/'){
        const homepage = fs.readFileSync('./index.html' ,'utf-8');
        res.write(homepage)
        res.end()        
    }
    else if ( req.url === '/api/users' && req.method === 'GET'){
        res.writeHead(200, {'content-type':'application/json'});
        res.write(JSON.stringify(users));
        res.end();
    }
    
    else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1> Page not found </h1>')
        res.end()        
    }


});

server.listen(3000);