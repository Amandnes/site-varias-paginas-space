let role = document.querySelector('.role-crew')
let name = document.querySelector('.name-crew')
let bio = document.querySelector('.bio-crew')
let imgCrew = document.querySelector('.img-crew')
let lista = document.querySelectorAll('li')

fetch("data.json").then(resposta => {
  resposta.json().then(data => {
      lista.forEach((li, i) => {
        li.addEventListener('click', () => {
          role.innerHTML = data.crew[i].role
          name.innerHTML = data.crew[i].name
          bio.innerHTML = data.crew[i].bio
          imgCrew.setAttribute('src', data.crew[i].images.png)

          for(let i = 0; i <= lista.length; i++) {
            if(lista[i].classList.contains('li-w')) {
              lista[i].classList.remove('li-w')
            } else {
              li.classList.add('li-w')
            }
          }
        })
      })
  })
})