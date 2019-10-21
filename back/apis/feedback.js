module.exports = async (req, body, resp, end, url) => {
  const fbColl = db.collection('feedbacks')

  switch (url) {
    case 'give': return await fbColl.insertOne(body), end({ok: {}})
    case 'get': return end(await fbColl.find().toArray())
    case 'check': return await fbColl.updateOne({_id: body.id}, {$set: {check: body.check}} ), 
      end({ok: {}})
  }

}