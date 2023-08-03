
/* Função do botão de troca de tema. */
function toggleMode() {
  const html = document.documentElement
  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    // senão, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
  }

  /* Condição que verifica se na classe de listas
      do documento html contem a classe 'light',
      se contém, é removida, se não, é adicionada.
  */

  
  
}