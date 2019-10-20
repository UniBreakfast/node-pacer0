module.exports = async (req, body, resp, end, url) => {
  fbColl = db.collection('feedbacks')

  switch (url) {
    case 'give': return await fbColl.insertOne(body), end({ok: {}})
    case 'get': return end(await fbColl.find().toArray())
  }

}