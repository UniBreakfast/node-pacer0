
log('Page loaded')

submit.onclick = e => { e.preventDefault()
  api('feedback/give', {msg: msg.value, title: title.value},
    answer => (msg.value = title.value = '', log(answer)))
}

