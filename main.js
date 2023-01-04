const linkHome = document.querySelector('.linkHome');
const linkAbout = document.querySelector('.linkAbout');
const linkExplorer = document.querySelector('.linkExplorer');
const bodyHome = document.querySelector('body');

linkHome.addEventListener('click', () => {
    linkHome.classList.add('active');
    linkAbout.classList.remove('active');
    linkExplorer.classList.remove('active');
    bodyHome.classList.add('bodyHome');
    bodyHome.classList.remove('bodyAbout');
    bodyHome.classList.remove('bodyExplorer');
});

linkAbout.addEventListener('click', () => {
    linkAbout.classList.add('active');
    linkHome.classList.remove('active');
    linkExplorer.classList.remove('active');
    bodyHome.classList.add('bodyAbout');
    bodyHome.classList.remove('bodyHome');
    bodyHome.classList.remove('bodyExplorer');
});

linkExplorer.addEventListener('click', () => {
    linkExplorer.classList.add('active');
    linkHome.classList.remove('active');
    linkAbout.classList.remove('active');
    bodyHome.classList.add('bodyExplorer');
    bodyHome.classList.remove('bodyAbout');
    bodyHome.classList.remove('bodyHome');
});

const routes = {
    '/': '/pages/home.html',
    '/about': '/pages/about.html',
    '/explorer': '/pages/explorer.html',
};

function route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, '', event.target.href);

    hundle();
}

function hundle() {
    const { pathname } = window.location;
    const route = routes[pathname];

    fetch(route)
        .then((data) => data.text())
        .then((html) => (document.querySelector('#app').innerHTML = html));
}
hundle();

window.onpopstate = () => hundle();

