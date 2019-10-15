window.say = console.log

evolveArr([...document.body.children])

import nothing from "./component.js";

say('Page loaded at '+ now)

window.api = (route, body, cb=x=>x) => fetch('/api/'+route, 
  {method: 'POST', headers: {body: JSON.stringify(body)}})
    .then(resp => cb(JSON.parse([...resp.headers].find(([k])=>k=='body')[1])))