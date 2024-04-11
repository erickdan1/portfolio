// alternar ícone de menu de navegação
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll seções
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
        if(top >= offset && top < offset + height) {
            //ativar links na barra de navegação
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            
            sec.classList.add('show-animate')
        }
        else {
            sec.classList.remove('show-animate')
        }
    });

    // prender header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remover icone alternado e a barra de navegação quando clicar nos links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animação rodapé
    let footer = document.querySelector('footer')

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight); 
}
