
onload = getMessages =()=> (upd.feedbacks.length = 0) || 
  api('feedback/get', messages => {
    messages.forEach(message => message.and = {
      check: message.check? 'checked' : '',
      pale: message.check? 'pale' : ''
    })
    upd.feedbacks.push(... messages)
  } )

fbTable.onclick = e => {
  const tr = e.path.find(el => el.tagName == 'TR')
  if (e.target.tagName == 'TD' && !e.target.nextElementSibling 
    || e.target.type == 'checkbox') {
      const box = tr.querySelector('[type=checkbox]')
      if (e.target != box) box.checked = !box.checked
      tr.classList.toggle('pale')
      api('feedback/check', {id: tr.id, check: box.checked}, 
        result => !result.ok? getMessages() :0, err => log(err) && getMessages() )
    }
}