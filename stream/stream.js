import fs from 'fs';
import http from 'http';

const server = http.createServer();
server.on('request', (req, res) => {
   
    // fs.readFile('input.txt', function (err, data) {
    //   if (err) return console.error(err);
    //   res.end(data.toString());
    // });

    
    const rstream=fs.createReadStream('input.txt');
    rstream.pipe(res);
    // rstream.on('data',(chunk)=>{
    //     res.write(chunk);
    // }
   
    // );
    // rstream.on('end',()=>{
    //     res.end();
    // }
    // );
    
});

server.listen(3000, '127.0.0.1');