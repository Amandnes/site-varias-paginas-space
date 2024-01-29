const iconeHm = document.querySelector('.icon-hm')
  const nav = document.querySelector('.xnav')
  const iconeClose = document.querySelector('.icon-close')

  iconeHm.addEventListener('click', () => {
    nav.style.display = 'block'
    iconeClose.style.display = 'block'
  })
  iconeClose.addEventListener('click', () => {
    nav.style.display = 'none'
    iconeClose.style.display = 'none'
  })