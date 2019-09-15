Object.defineProperty(window, 'now', 
  { get: ()=> String(new Date).match(/\d+:\d+:\d+/)[0] } )
export default false