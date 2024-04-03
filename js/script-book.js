// Passar a página quando clicar no botão de "próximo" ou "voltar"
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnBtnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnBtnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})

// Botão de Contato
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)

        }, (index + 1) * 200 + 100)
    })
}

// Função de index reverso
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

// Botão de voltar para perfil
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex()
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex()
                pages[pageNumber].style.zIndex = 10 + index
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}

// Animação de livro abrindo
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left')

setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800)

// Animação página de perfil

pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex()
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex()
            pages[pageNumber].style.zIndex = 10 + index
        }, 500)
    }, (index + 1) * 200 + 2100)
})