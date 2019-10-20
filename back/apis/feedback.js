module.exports = async (req, body, resp, end, url) => {

  switch (url) {
    case 'give':
      await db.collection('feedbacks').insertOne(body)
      return end({ok: {}})
  }

}