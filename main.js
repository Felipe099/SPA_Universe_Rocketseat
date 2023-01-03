const routes = {
    '/': '/pages/home.html',
    '/about': '/pages/about.html',
    '/explorer': '/pages/explorer.html',
};

function route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, '', event.target.href)

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