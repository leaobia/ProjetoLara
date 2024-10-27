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
let slideIndex2 = 0;

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


const slides2 = [
    {
        img: '/img/uberaba.png',
        alt: 'UBERABA/MG',
        texto: 'Gestão e Operação de aterro sanitário, limpeza e conservação urbana, coleta domiciliar, varrição, gerenciamento de resíduos sólidos domiciliares classe II A II B.'
    },
    {
        img: '/img/portoAlegre.png',
        alt: 'POUSO ALEGRE/MG',
        texto: 'Gestão e Operação de aterro sanitário, gerenciamento de resíduos sólidos industriais e domiciliares classe II A II B.'
    },
    {
        img: '/img/mauá.png',
        alt: 'MAUÁ',
        texto:'Gestão e Operação de aterro sanitário, gerenciamento e tratamento de resíduos de saúde, disposição de resíduos sólidos domiciliares e industriais classe II A II B e geração de energia e crédito de carbono.'
    }
];

function mostrarSlide2(index) {
    const img = document.querySelector('.imgcidade');
    const elipses2 = document.querySelectorAll('.ellipse2');
    const botoes = document.querySelectorAll('.servicosBtn button'); 
    const decoracao = document.getElementById('servicosCarrossel-decoracao');
    const servicosCarrosselTxt = document.getElementById('servicosCarrossel-texto');

    img.src = slides2[index].img;
    servicosCarrosselTxt.textContent = slides2[index].texto; // Atualiza o texto do carrossel

    elipses2.forEach((ellipse, i) => {
        ellipse.classList.remove('active');
        if (i === index) {
            ellipse.classList.add('active');
        }
    });

    const cidadeNome = slides2[index].alt; 
    botoes.forEach((botao) => {
        const botaoTexto = botao.textContent.toLowerCase(); 

        if (botaoTexto === cidadeNome.toLowerCase()) {
            botao.classList.add('elevado'); 
        } else {
            botao.classList.remove('elevado'); 
        }
    });
    
    // Atualiza a decoração conforme a cidade
    if (cidadeNome === 'MAUÁ') {
        decoracao.classList.add('ROSA'); 
        decoracao.classList.remove('AZUL', 'LARANJA'); 
    } else if (cidadeNome === 'POUSO ALEGRE/MG') {
        decoracao.classList.remove('ROSA'); 
        decoracao.classList.add('AZUL'); 
        decoracao.classList.remove('LARANJA'); 
    } else if (cidadeNome === 'UBERABA/MG') {
        decoracao.classList.remove('ROSA', 'AZUL'); 
        decoracao.classList.add('LARANJA'); 
    }
}

// Funções para navegar pelos slides
function proximo2() {
    slideIndex2 = (slideIndex2 + 1) % slides2.length;
    mostrarSlide2(slideIndex2);
}

function anterior2() {
    slideIndex2 = (slideIndex2 - 1 + slides2.length) % slides2.length;
    mostrarSlide2(slideIndex2);
}

// Inicia o carrossel no primeiro slide
mostrarSlide2(slideIndex2);
