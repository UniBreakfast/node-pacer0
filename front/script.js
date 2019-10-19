
log('Page loaded')

window.api = (route, body, cb=x=>x, errcb=log) => fetch('/api/'+route, 
  {method: 'POST', headers: {body: JSON.stringify(body)}})
    .then(resp => {
      const body = [...resp.headers].find(([k])=>k=='body')
      if (body) return body[1];  else throw resp
    })
    .then(body => cb(JSON.parse(body)))
    .catch(async resp => errcb(await resp.text()))

submit.onclick = e => {
  e.preventDefault()
  api('feedback/gives', {msg: msg.value, title: title.value},
    answer => (msg.value = title.value = '', log(answer)))
}

