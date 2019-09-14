
imp = (...what) => what.map(name => global[name] = require(name))
imp('fs', 'http')

say = console.log
file = path => fs.readFileSync(path)

port = process.env.PORT || 3000

http.createServer( (req, resp) => {
  const end = resp.end.bind(resp), 
        head = headers => resp.writeHead(200, headers), 
      { url } = req

  say("Handling request: "+url)

  if (url == '/') return end(file('front/index.html'))
  
  {
    try { 
      const content = file('front'+url)
      if (url.endsWith('.css')) head({'Content-Type': 'text/css'})
      end(content) 
    } 
    catch { end('Sorry, '+url+' route unhandled or file not found, '
      +'or cannot be provided right now for some reason') }
  }
}).listen(port, ()=> say('Server started at port '+port))