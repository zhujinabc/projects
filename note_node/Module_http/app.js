const http = require('http')
const querryString = require('querystring')
let server = http.createServer((request,response)=>{
    const url = request.url
    let data = ''
    request.on('data',(chunk)=>{
        data+=chunk
    })
    request.on('end',()=>{
        response.writeHead(200,{
            // 'content-type':'text/html'
            'content-type':'application/json;charset=utf-8'
        })
        // response.write('<div style="color:red">123</div>')
        // response.write('<div style="color:red">abc</div>')
        response.write(JSON.stringify(querryString.parse(data)))
        response.end()
    })
})
server.listen(8080,()=>{
    console.log('localhost:8080')
})