
log('Page loaded')

submit.onclick = e => { e.preventDefault()
  if (!msg.value && !title.value) return
  api('feedback/give', {msg: msg.value, title: title.value, author: author.value},
    answer => (msg.value = title.value = author.value = '', log(answer)))
}

