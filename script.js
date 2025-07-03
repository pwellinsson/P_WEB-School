const turma = document.getElementById('nomeTurma')
const input_turma = document.getElementById('file')
turma.innerHTML = input_turma

console.log(turma)


// /*Criando o MODAL */
// const imagens = document.querySelectorAll('.galeria img')
// const modal = document.getElementById('modal')
// const modalImg = document.querySelector('#modal img')
// const closeImg = document.querySelector('#btnFechar img')

// imagens.forEach(imagem => {
//     imagem.addEventListener('click', () =>{
//         const imgSelect = imagem.src
//         modalImg.src = imgSelect

//         modal.style.display = 'flex'
//         closeImg.style.display = 'block'
//     })
// })

// closeImg.addEventListener('click', ()=>{
//     modal.style.display = 'none'
//     closeImg.style.display = 'none'
// })

// modal.addEventListener('click', (event) => {
//     if (event.target == modal){
//         modal.style.display = 'none'
//         closeImg.style.display = 'none'
//     }
// })