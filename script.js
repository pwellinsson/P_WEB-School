/*Pegando o nome da pasta */
function nomePasta(){
    alert("Rodando")
    const inputT = document.getElementById('file')
    const turma = document.getElementById('nomeTurma')
    const files = inputT.files

    if (files.length > 0){
        const firstFile = files[0]
        const relativePath = firstFile.webkitRelativePath

        if (relativePath){
            const nomePasta = relativePath.split('/')[0]
            turma.innerHTML = nomePasta
        }else{
            turma.innerHTML ="Nenhuma pasta selecionada ou o arquivo foi encotrado"
        }
    }else{
        turma.innerHTML ="Nenhuma pasta selecionada ou o arquivo foi encotrado"
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