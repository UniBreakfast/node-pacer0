
String.prototype.wo = function(piece) { return this.replace(piece, '') }


use = module => setTimeout( ()=> {
  try { delete require.cache[require.resolve(dir+module)] } catch {}
} , 0) && require(dir+module)

imp = (once, ...modules) => modules.map( module => 
  global[module.replace(/.*\/(?=\w+$)/, '')] = 
    once? require(module[0]=='.'? dir+module : module) 
      : (...args) => use(module)(...args) )