const http = require('http')

// req is the user request
// res is the response
const server = http.createServer((req, res)=>{
    if (req.url === '/')    // if the request comes from the homepage '/'
    {
        //res.write('Welcome to our home page')
        //res.end()
        res.end('Welcome to our home page')
    } else if (req.url === '/about')   // if the request comes from the about page
    {
        res.end('Here is our short history')
    } else {
    // when url does not exist
    res.end(`
        <h1>Ooops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>`)
    }
})

server.listen(5000) //5000 is arbitrary port for this app