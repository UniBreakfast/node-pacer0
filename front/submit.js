
log('Page loaded')

submit.onclick = e => { e.preventDefault()
  if (!msg.value && !title.value) return
  submit.disabled = true
  submit.innerText = 'Ушло'
  api('feedback/give', {msg: msg.value, title: title.value, author: author.value},
    answer => {
      log(answer)
      if (answer.ok) {
        msg.value = title.value = author.value = ''
        submit.innerText = 'Принято'
      } else submit.innerText = 'Ошибка'
      setTimeout(()=> {
        submit.innerText = 'Отправить'
        submit.disabled = false
      }, 3000)
    }
  )
}

