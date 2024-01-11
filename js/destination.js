let imgDestination = document.querySelector('.img-destination')
let nomeDestination = document.querySelector('.nome-destination')
let descricaoDestination = document.querySelector('.descricao-destination')
let distanciaDestination = document.querySelector('.distancia-destination')
let travelDestination = document.querySelector('.travel-destination')
let nomeP = document.querySelectorAll('.nomeP')

fetch("data.json").then(resposta => {
    resposta.json().then(data => {
      nomeP.forEach((e, i) => {
        e.addEventListener('click', () => {
          imgDestination.setAttribute('src', data.destinations[i].images.png)
          nomeDestination.innerHTML = data.destinations[i].name
          descricaoDestination.innerHTML = data.destinations[i].description
          distanciaDestination.innerHTML = data.destinations[i].distance
          travelDestination.innerHTML = data.destinations[i].travel           
    
          for(let i = 0; i <= nomeP.length ; i++) {
            let ativo = nomeP[i].classList.contains('cl-w')
            if(ativo === true) {
              nomeP[i].classList.remove('cl-w')
            } else {
              e.classList.add('cl-w')
            }
          }
        })
      })
    })
})

