module.exports = (req, resp) => {
  const end = resp.end.bind(resp), 
        head = headers => resp.writeHead(200, headers), 
      { url } = req

  say("Handling request: "+url)

  if (url == '/') return end(file('front/index.html'))

  if (url == '/runtime') return end('RunTime it is!')

  {
    try { 
      const content = file('front'+url)
      if (url.endsWith('.css')) head({'Content-Type': 'text/css'})
      end(content) 
    } 
    catch { end('Sorry, '+url+' route unhandled or file not found, '
      +'or cannot be provided right now for some reason') }
  }
}