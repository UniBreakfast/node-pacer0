
log('Page loaded')

api = async (route, body, cb=x=>x, errcb=log) => {
  const resp = await fetch('/api/'+route, 
    {method: 'POST', headers: {body: JSON.stringify(body)}})
  body = [...resp.headers].find(([k])=>k=='body')
  if (body) cb(JSON.parse(body[1]))
  else errcb(await resp.text())
}

submit.onclick = e => {
  e.preventDefault()
  api('feedback/give', {msg: msg.value, title: title.value},
    answer => (msg.value = title.value = '', log(answer)))
}

