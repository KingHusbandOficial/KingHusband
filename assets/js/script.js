//Botones del nav, para navegar a las secciones de la página.
const btnHome = document.getElementById('btn-home');
const btnAbout = document.getElementById('btn-about');
const btnContact = document.getElementById('btn-contact');

//Eventos para cambiar de sección de la página. (Home, About y Contact)
let homePage = true;
let aboutPage = false;
let contactPage = false;
let pagActual = 'Home';

btnHome.addEventListener('click', function() {
    switch (homePage) {
        case true:
            alert(`You are at ${pagActual} already`)
            break;
        default:
            homePage = true;
            aboutPage = false;
            contactPage = false;
            pagActual = 'Home';
            alert(`Now you are at ${pagActual}`);
            break;
    }
});

btnAbout.addEventListener('click', function() {
    switch (aboutPage) {
        case true:
            alert(`You are at ${pagActual} already`)
            break;
        default:
            homePage = false;
            aboutPage = true;
            contactPage = false;
            pagActual = 'About';
            alert(`Now you are at ${pagActual}`);
            break;
    }
});

btnContact.addEventListener('click', function() {
    switch (contactPage) {
        case true:
            alert(`You are at ${pagActual} already`)
            break;
        default:
            homePage = false;
            aboutPage = false;
            contactPage = true;
            pagActual = 'Contact';
            alert(`Now you are at ${pagActual}`);
            break;
    }
});