const root = document.getElementById('root');

const createTopAppBar = function () {
    document.body.insertAdjacentHTML(
        'beforeend',
        `
            <div class="top-app-bar">
                <div class="top-app-bar-row">
                    <section class="top-app-bar-row__section">
                        <button class="top-app-bar-row__icon-button" id="top-app-bar__button">
                            <span class="material-icons-round">
                                menu
                            </span>
                        </button>
                    </section>
                    <section class="top-app-bar-row__section">
                        <button class="top-app-bar-row__icon-button">
                            <span class="material-icons-round">
                                download
                            </span>
                        </button>
                    </section>
                </div>
            </div>
        `,
    );
};

const createBackdrop = function () {
    document.body.insertAdjacentHTML(
        'afterbegin',
        `
            <div class="backdrop"></div>
        `,
    );
};

const createButtomNavigation = function () {
    document.body.insertAdjacentHTML(
        'afterbegin',
        `
            <nav class="drawer">
                <div class="menu">
                    <ul class="list">
                        <li class="list-item">Button</li>
                        <li class="list-item">Card</li>
                        <li class="list-item">Check Box</li>
                        <li class="list-item">Chips</li>
                        <li class="list-item">Data Table</li>
                    </ul>
                </div>
            </nav>
        `,
    );
};

const createHeader = function () {
    document.body.insertAdjacentHTML(
        'beforeend',
        `
            <header class="head">
                  <div class="head-logo">
                        <img class="head-logo-image"
                             src="favicon_io/android-chrome-192x192.png"
                             alt="02.dua">
                        <h1 class="head-logo-label">dua</h1>
                  </div>
            </header>
        `,
    );
};

const initPage = () => {
    createButtomNavigation();
    createBackdrop();
    createTopAppBar();
    createHeader();
};

window.onload = initPage();

const appBar = document.body.getElementsByTagName('nav').item(0);
const appBarButton = document.getElementById('top-app-bar__button');
const backdrop = document.querySelector('.backdrop');
const drawer = document.querySelector('.drawer');

const showBackdrop = function () {
    backdrop.classList.toggle('open');
    backdrop.style.display = 'block';
};

const showDrawer = function () {
    drawer.classList.toggle('open');
    drawer.style.display = 'block';
};

const showButtomNavigation = function () {
    showBackdrop();
    showDrawer();
};

appBarButton.addEventListener('click', showButtomNavigation);
backdrop.addEventListener('click', function () {
    drawer.classList.remove('open');
    drawer.style.display = 'none';
    backdrop.classList.remove('open');
    backdrop.style.display = 'none';
});
