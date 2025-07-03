/*Pegando o nome da pasta */
function nomePasta() {
    const inputT = document.getElementById('file')
    const files = inputT.files

    if (files.length > 0){
        const firstFile = files[0]
        const relativePath = firstFile.webkitRelativePath

        if (relativePath){
            const nomePasta = relativePath.split('/')[0]
            localStorage.setItem('nomeDaTurma', nomePasta)  // salva no localStorage
        }
    }
}

/*Criando o MODAL */
const imagens = document.querySelectorAll('.galeria img')
const modal = document.getElementById('modal')
const modalImg = document.querySelector('#modal img')
const closeImg = document.querySelector('#btnFechar img')

imagens.forEach(imagem => {
    imagem.addEventListener('click', () =>{
        const imgSelect = imagem.src
        modalImg.src = imgSelect

        modal.style.display = 'flex'
        closeImg.style.display = 'block'
    })
})

closeImg.addEventListener('click', ()=>{
    modal.style.display = 'none'
    closeImg.style.display = 'none'
})

modal.addEventListener('click', (event) => {
    if (event.target == modal){
        modal.style.display = 'none'
        closeImg.style.display = 'none'
    }
})