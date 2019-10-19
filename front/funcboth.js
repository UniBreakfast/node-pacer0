
try { gloW = global } catch { gloW = window }


Object.defineProperty(gloW, 'now', 
  { get: ()=> String(new Date).match(/\d+:\d+:\d+/)[0], configurable: true } )
  
log = (...args) => console.log(now, ...args) || args.pop()
