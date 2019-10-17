if (dev) use('./back/funcback')

module.exports = (req, resp) => {

  const head = headers => resp.writeHead(200, headers),
        end = by => 
          typeof by == 'string' || by instanceof Buffer? 
            resp.end(by) : ( head({body: JSON.stringify(by)}), end('') ),
        type = val => head({ 'Content-Type': val }),
        url = req.url.wo('/')

  log("Handling request: /" + url)

  try {

    if (url.startsWith('api/')) 
      return use('./back/api')(req, resp, end, url.wo('api/'))

    {
      const content = file('front/' + (url || 'index.html'))
      if (url.endsWith('.css')) type('text/css')
      if (url.endsWith('.js')) type('text/javascript')
      end(content)
    }
  }
  catch (err) {
    if (err) log(err)
    end('Sorry, /' + url + ' route unhandled or file not found, '
      + 'or cannot be provided right now for some reason')
  }

}
