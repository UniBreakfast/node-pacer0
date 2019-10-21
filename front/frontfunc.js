
api = async (route, body, cb, errcb) => {
  if (typeof body == 'function') [body, cb, errcb] = [{}, body, cb]
  cb = cb || (x=>x), errcb = errcb || log
  const resp = await fetch('/api/'+route, 
    {method: 'POST', headers: {body: encodeURI(JSON.stringify(body))}});
  (body = resp.headers.get('body'))? 
    cb(JSON.parse(decodeURI(body))) : errcb(await resp.text())
}
