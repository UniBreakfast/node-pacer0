
log('Page loaded')

window.api = (route, body, cb=x=>x) => fetch('/api/'+route, 
  {method: 'POST', headers: {body: JSON.stringify(body)}})
    .then(resp => cb(JSON.parse([...resp.headers].find(([k])=>k=='body')[1])))