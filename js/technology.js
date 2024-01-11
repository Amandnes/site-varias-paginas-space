let nomeTech = document.querySelector('.nome-tech')
let descricao = document.querySelector('.desc-tech')
let imgTech = document.querySelector('.img-tech')
let lista = document.querySelectorAll('#lista-tech li')

fetch("data.json").then(resposta => {
  resposta.json().then(data => {
    lista.forEach((li, i) => {
      li.addEventListener('click', () => {
        nomeTech.innerHTML = data.technology[i].name
        descricao.innerHTML = data.technology[i].description
        imgTech.setAttribute('src', data.technology[i].images.portrait)

        for(let i = 0; i <= lista.length; i++) {
          if(lista[i].classList.contains('li-tech')) {
            lista[i].classList.remove('li-tech')
          } else {
            li.classList.add('li-tech')
          }
        }
      })
    })
  })
})