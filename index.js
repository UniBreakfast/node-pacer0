Object.defineProperty(global, 'now', 
  { get: ()=> String(new Date).match(/\d+:\d+:\d+/)[0] } )
  
log = (...args) => console.log(now, ...args) || args[args.length-1]

String.prototype.wo = function(piece) { return this.replace(piece, '') }

use = module => setTimeout( ()=> {
  try { delete require.cache[require.resolve(module)] } catch {}
} , 0) && require(module)

imp = (...what) => what.map(name => 
  global[name.replace(/.*\/(?=\w+$)/, '')] = require(name))

imp('fs', 'http')

file = fs.readFileSync

port = process.env.PORT || 3000

http.createServer( (...both) => use('./back/onrequest')(...both))
  .listen(port, ()=> log('Server started to listen port '+port))