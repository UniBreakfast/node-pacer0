module.exports = (req, resp, end, url) => {

  switch (url) {
    case 'add':
      const body = JSON.parse(req.headers.body)
      return end(JSON.stringify(log(body)))
  }

  throw ''
}