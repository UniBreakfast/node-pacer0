module.exports = (req, body, resp, end, url) => {

  switch (url) {
    case 'give':
      return end(body)
  }

  // throw ''
}