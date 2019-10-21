module.exports = async (req, resp, end, url) => {
  try { 
    var body = JSON.parse(decodeURI(req.headers.body)) 
    if (body.id) body.id = mongodb.ObjectID(body.id)
  } catch {}
  const [ route ] = url.match(/^\w+(?=\/)/)
  await use('./back/apis/'+route)(req, log(body), resp, end, url.wo(route+'/'))

  throw ''
}