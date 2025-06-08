var fotoinsta = document.getElementById('fotoinsta')
function link(){
   window.open('https://www.instagram.com/slug_tattoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==,', '_blank')
}
const imagens = document.querySelectorAll ('#tatuagens1 img')
const modal = document.getElementById ('modal')
const modalimg = document.getElementById('modal-img')

imagens.forEach(img => {    
img.addEventListener ('click', (e) => {
    e.stopPropagation(); //Impende conflitos com o onclick no header
    modal.style.display = 'flex'
    modalimg.src = img.src; // Coloca a imagem clicada dentro do modal
})
    
});
function fecharmodal(){
    modal.style.display = 'none'
}