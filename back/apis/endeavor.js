module.exports = (req, body, resp, end, url) => {

  switch (url) {
    case 'add':
      // return end(JSON.stringify(log(body)))
      return resp.writeHead(200, {body: JSON.stringify(log(body))})
  }

  throw ''
}