module.exports = (req, resp) => {
  const end = resp.end.bind(resp), 
        head = headers => resp.writeHead(200, headers),
        type = val => head({'Content-Type': val}), 
      { url } = req

  say("Handling request: "+url)

  if (url == '/') return end(file('front/index.html'))

  if (url == '/runtime') return end('RunTime it is!')

  {
    try { 
      const content = file('front'+url)
      if (url.endsWith('.css')) type('text/css')
      if (url.endsWith('.js')) type('text/javascript')
      end(content) 
    } 
    catch { end('Sorry, '+url+' route unhandled or file not found, '
      +'or cannot be provided right now for some reason') }
  }
}