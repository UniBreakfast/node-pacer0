
onload =()=> api('feedback/get', messages => {
  messages.forEach(message => message.check = message.check? ' checked' : '')
  upd.feedbacks.push(... messages)
} )

fbTable.onclick = e => {
  const tr = e.path.find(el => el.tagName == 'TR')
  if (e.target.tagName == 'TD' && !e.target.nextElementSibling 
    || e.target.type == 'checkbox') {
      const box = tr.querySelector('[type=checkbox]')
      if (e.target != box) box.checked = !box.checked
      const was = !box.checked
      api('feedback/check', {id: tr.id, check: !was}, 
        result => box.checked = result.ok? !was : was,
          err => { log(err); box.checked = was })
    }
}