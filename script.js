
/* Função do botão de troca de tema. */
function toggleMode() {
  const html = document.documentElement

  /* Condição que verifica se na classe de listas
      do documento html contem a classe 'light',
      se contém, é removida, se não, é adicionada.
  */
  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }
  
  html.classList.toggle('light')
}