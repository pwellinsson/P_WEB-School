const button = document.getElementById('btnEnviar')


/*Pegando o nome da Pasta*/
function obterNomePasta() {
  const inputT = document.getElementById('file')
  const files = inputT.files

  if (files.length > 0) {
    const firstFile = files[0]
    const relativePath = firstFile.webkitRelativePath

    if (relativePath) {
      const nome = relativePath.split('/')[0]
      localStorage.setItem('nomeDaTurma', nome)
    }
  }
}

/*Carregando as imagens na div #people */
function carregarImagens() {
  const input = document.getElementById('file')
  const files = Array.from(input.files)

  const nomesImagens = []

  files.forEach(file => {
    if (/\.(jpg|jpeg|png|gif)$/i.test(file.name)) {
      nomesImagens.push(file.name)
    }
  })

  localStorage.setItem('imagens', JSON.stringify(nomesImagens))
}

button.addEventListener('click', e => {
  e.preventDefault()
  obterNomePasta()
  carregarImagens()
  setTimeout(() => {
    window.location.href = 'galeria.html'
  }, 300)
})
