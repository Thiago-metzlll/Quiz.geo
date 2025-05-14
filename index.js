document.addEventListener('DOMContentLoaded', () => {
  
 let header_body = document.getElementById('header')

  let header = document.createElement('div')
  header.textContent = "Bem-vindo ao Quiz!"
  header.className = "titulo"

  header_body.appendChild(header)
})