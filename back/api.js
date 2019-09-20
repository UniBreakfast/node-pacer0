module.exports = (req, resp, end, url) => {
  try { var body = JSON.parse(req.headers.body) } catch {}
  const [ route ] = url.match(/^\w+(?=\/)/)
  use('./back/apis/'+route)(req, body, resp, end, url.wo(route+'/'))

  throw ''
}