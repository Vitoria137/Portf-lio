const cabecalho = document.querySelector('.cabecalho');
const pixel = '50';

window.addEventListener('scroll', function(){
    if(this.window.scrollY > pixel){
        cabecalho.classList.add("cabecalho-scroll")
    }else{
        cabecalho.classList.remove("cabecalho-scroll")
    }
})

//Máquina de escrever
const textoNome = document.querySelector('#name');

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i)
    })
}

typeWrite(textoNome)

//Animação

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(elemento){
        if(windowTop > elemento.offsetTop){
            elemento.classList.add(animationClass)
        } else {
            elemento.classList.remove(animationClass)
        }
    })
}
animeScroll();

if(target.length){
    window.addEventListener('scroll', function(){
    animeScroll();
})
}

//Menu
