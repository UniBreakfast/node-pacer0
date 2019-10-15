module.exports = (req, body, resp, end, url) => {

  switch (url) {
    case 'add':
      return end(body)
  }

  throw ''
}