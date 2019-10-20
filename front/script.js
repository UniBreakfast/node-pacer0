
log('Page loaded')

api = async (route, body, cb=x=>x, errcb=log) => {
  const resp = await fetch('/api/'+route, 
    {method: 'POST', headers: {body: encodeURI(JSON.stringify(body))}});
  (body = resp.headers.get('body'))? 
    cb(JSON.parse(decodeURI(body))) : errcb(await resp.text())
}

submit.onclick = e => { e.preventDefault()
  api('feedback/give', {msg: msg.value, title: title.value},
    answer => (msg.value = title.value = '', log(answer)))
}

