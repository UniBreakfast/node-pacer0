String.prototype.wo = function(piece) { return this.replace(piece, '') }

use = module => {
  if (module[0]=='.') module = dir+module
  try { delete require.cache[require.resolve(module)] } catch {}
  return require(module)
}

imp = (once, ...modules)=> modules.map( module => {
  const name = module.replace(/.*\/(?=\w+$)/, ''),
        mod = use(module)
  if (once) JSON.stringify(mod)=='{}'? 0: global[name] = mod
  else { switch (typeof mod) {
    case 'object': 
      delete global[name]
      return global[name] = new Proxy({}, {get: (_, prop)=> use(module)[prop]})
    case 'function': return global[name] = (...args)=> use(module)(...args)
    default: Object.defineProperty(global, name, 
      {get: ()=> use(module), configurable: true}) 
  } } 
})
