
log('Page loaded')

window.api = (route, body, cb=x=>x) => fetch('/api/'+route, 
  {method: 'POST', headers: {body: JSON.stringify(body)}})
    .then(resp => {
      try { return [...resp.headers].find(([k])=>k=='body')[1] }
      catch { throw resp.text() }
    })
    .then(body => cb(JSON.parse(body)))
    .catch(answer => answer.then(err => cb(null, err)))

submit.onclick = e => {
  e.preventDefault()
  api('feedback/gives', {msg: msg.value, title: title.value},
    (answer, err) => (msg.value = title.value = '', log(answer || err)))
}

