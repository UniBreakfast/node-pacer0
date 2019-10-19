
dir = __dirname+'/'

require('./back/funcback')

imp(true, 'fs', 'http', 'mongodb')
imp(false, './front/funcboth')


file = fs.readFileSync

port = process.env.PORT || 3000

dev = !process.env.PORT

imp(!dev, './back/onrequest')


http.createServer(onrequest).listen(port, 
  ()=> log('Server started to listen on port '+port))