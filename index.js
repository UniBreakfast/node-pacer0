dir = __dirname+'/'

require('./back/funcback')
imp(1, 'fs', 'http', 'mongodb', './front/funcboth')

file = fs.readFileSync
port = process.env.PORT || 3000
dev = !process.env.PORT

imp(!dev, './back/onrequest')

http.createServer(onrequest).listen(port, 
  ()=> log('Server started to listen on port '+port));

mongolink = process.env.mongolink || require('./back/mongolink');

(new mongodb.MongoClient(mongolink, {useNewUrlParser: true, useUnifiedTopology: true}))
  .connect((err, cluster)=> err? log(err)
    : (db = cluster.db('node-pacer0')) && log('Connected to MongoDB'))
