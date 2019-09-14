
imp = (...what) => what.map(name => 
  global[name.replace(/.*\/(?=\w+$)/, '')] = require(name))
imp('fs', 'http')

say = console.log
file = path => fs.readFileSync(path)
use = module => setTimeout(()=> delete require.cache[require.resolve(module)], 0)
  && require(module)

port = process.env.PORT || 3000

http.createServer( (...both) => use('./back/onrequest')(...both))
  .listen(port, ()=> say('Server started at port '+port))