var server = require('./ServerConfig/server')

server.listen().then(({url})=>{
    console.log(`Servidor list en ${url}`);
});