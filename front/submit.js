
log('Page loaded')

submit.onclick = async e => { e.preventDefault()
  if (!msg.value && !title.value) return
  assign(submit, {innerText: 'Ушло', disabled: true})
  try {
    await api('feedback/give', {msg: msg.value, title: title.value, author: author.value},
      answer => submit.innerText = answer.ok? 
        (msg.value = title.value = author.value = '') || 'Принято' : 'Ошибка' )
  } catch (e) { submit.innerText = 'Ошибка', log(e) }
  setTimeout(()=> assign(submit, {innerText: 'Отправить', disabled: false}), 3000)
}

