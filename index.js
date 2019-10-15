dir = __dirname+'/'

require('./back/funcback')

imp(true, 'fs', 'http', 'mongodb')

// setInterval(()=>{
//   try {
//     mongodb.MongoClient.connect(process.env.MONGO_URI, 
//       {useNewUrlParser: true, useUnifiedTopology: true}, (err, cluster)=> {
//         if (err) return log('hmm...', err)
//         cluster.db('node-pacer0').collection('endeavors')
//           .insertOne({now}, (err, result)=> log(err, result, '.'))
//         cluster.close()
//       })
//   } catch (err) {log(err)}
// }, 7e6)

file = fs.readFileSync

port = process.env.PORT || 3000

dev = !process.env.PORT
imp(!dev, './back/onrequest')

http.createServer(onrequest).listen(port, 
  ()=> log('Server started to listen on port '+port))