const slides = [
    {
        title: "Cuidando do seu futuro no presente",
        content: "Para nós, do Grupo Lara, praticar hoje ações sustentáveis ajuda a garantir o futuro que queremos deixar para as próximas gerações. Por isso, trabalhamos além das fronteiras da operação e administração das exigências de mercado."
    },
    {
        title: "Nosso Compromisso",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nisi ac nisl tincidunt gravida sed ut augue. Donec vehicula libero sed erat luctus, in pharetra lorem volutpat."
    },
    {
        title: "Inovação e Sustentabilidade",
        content: "Suspendisse potenti. Cras vitae vehicula lorem. Nullam facilisis ex et libero cursus, non feugiat nulla pharetra. Curabitur malesuada vestibulum justo, nec luctus sem gravida ac."
    },
    {
        title: "Inovação e Sustentabilidade2",
        content: "Suspendisse potenti. Cras vitae vehicula lorem. Nullam facilisis ex et libero cursus, non feugiat nulla pharetra. Curabitur malesuada vestibulum justo, nec luctus sem gravida ac."
    },
    {
        title: "Inovação e Sustentabilidade3",
        content: "Suspendisse potenti. Cras vitae vehicula lorem. Nullam facilisis ex et libero cursus, non feugiat nulla pharetra. Curabitur malesuada vestibulum justo, nec luctus sem gravida ac."
    }
];

let slideIndex = 0;

function mostrarSlide(index) {
    const titulo = document.querySelector('.texto-title');
    const texto = document.querySelector('.texto-description');
    const elipses = document.querySelectorAll('.ellipse');

    titulo.textContent = slides[index].title;
    texto.textContent = slides[index].content;

    elipses.forEach((ellipse, i) => {
        ellipse.classList.remove('active'); 
        if (i === index) {
            ellipse.classList.add('active'); 
        }
    });
}

function proximo() {
    slideIndex = (slideIndex + 1) % slides.length;
    mostrarSlide(slideIndex);
}

function anterior() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    mostrarSlide(slideIndex);
}


mostrarSlide(slideIndex);