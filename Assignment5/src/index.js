var http = require("http");

const url = require('url');

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    
   const parsedUrl = url.parse(req.url, true);

    if(parsedUrl.pathname=== '/'){
        res.end("working") ;
    }
    else if(parsedUrl.pathname ==="/welcome"){

        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200;
        res.end(" Welcome to Dominos!")
    }
    else if(parsedUrl.pathname ==="/about"){

        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;

        const jsondata ={
            phone: '18602100000', 
            email: 'guestcaredominos@jublfood.com' 
        }
        res.end(JSON.stringify(jsondata));
    }else{
        res.statusCode = 404
        res.end("Page not found")
    }
}


httpServer.listen(8081,()=> console.log("server is on"));

// module.exports = httpServer;