say = console.log

Object.defineProperty(window, 'now', 
  { get: ()=> String(new Date).match(/\d+:\d+:\d+/)[0] } )

say('Page loaded at '+ now)