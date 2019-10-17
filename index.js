
dir = __dirname+'/'

require('./back/funcback')

imp(true, 'fs', 'http', 'mongodb')


file = fs.readFileSync

port = process.env.PORT || 3000

dev = !process.env.PORT

imp(!dev, './back/onrequest')


http.createServer(onrequest).listen(port, 
  ()=> log('Server started to listen on port '+port))