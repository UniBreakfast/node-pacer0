
api('feedback/get', {}, messages => 
  fbTbl.innerHTML = messages.reduce((html, {_id, title, msg}, i)=>
    html+`<tr id=${_id}><td>${i+1}</td><td><h3>${title}</h3><p>${msg}</p></tr>`, ''))