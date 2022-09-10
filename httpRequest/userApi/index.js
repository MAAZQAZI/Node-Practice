import http from 'http';

import fs from 'fs';
const server =http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Hello World from home side');
    }
    else if(req.url === '/about'){

        res.end('hello World from about side')
    }
    else if(req.url === '/userapi'){


       
        fs.readFile('userapi.json','utf-8',(err,data)=>{
            const da=JSON.parse(data);
           res.end(da[0].phone)  ;
          
        });
        
    }
    else{
        res.writeHead(404);
        res.end('hello World from 404 side')
    }
});

server.listen(3000,"127.0.0.1", ()=>{
    console.log('Server is running on port 3000');
});
