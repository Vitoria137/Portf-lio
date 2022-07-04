const menu = document.querySelector('.menu');
const botao = document.querySelector('#botao');
const nav = document.querySelector('.cabecalho')

botao.addEventListener('click', () =>{
    menu.classList.toggle('menu-ativo')
    nav.classList.toggle('cabecalho-ativo')
})