const root = document.getElementById('root');

const createTopAppBar = function () {
    root.insertAdjacentHTML(
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
    root.insertAdjacentHTML(
        'afterbegin',
        `
            <div class="backdrop"></div>
        `,
    );
};

const createButtomNavigation = function () {
    root.insertAdjacentHTML(
        'afterbegin',
        `
            <nav class="drawer">
                <div class="menu">
                    <ul class="contents">
                        <li class="content"><a>Button</a></li>
                        <li class="content"><a>Card</a></li>
                        <li class="content"><a>Check Box</a></li>
                        <li class="content"><a>Chips</a></li>
                        <li class="content"><a>Data Table</a></li>
                    </ul>
                </div>
            </nav>
        `,
    );
};

const createHeader = function () {
    root.insertAdjacentHTML(
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

const createContent = function () {
    root.insertAdjacentHTML(
        'beforeend',
        `
            <main>
                <section id="introduction">
                    <h1 id="introduction-title">
                        UI Component With HTML, CSS, JavaScript
                    </h1>
                    <p class="introduction-description">
                        Hello, welcome to my second project (two).
                        This website is a practical implementation
                        from what I already know. 
                        I've made it this far, 
                        because I prefare the "trial and error" way.
                        This project only aims to sharpen three
                        basic knowledge (HTML, CSS, JavaScript) and various
                        design concept from <i>Material Design</i>.
                    </p>
                    <p class="introduction-description">
                        With this project I want to know more about how HTML, 
                        CSS, and JavaScript work together.
                        The role of HTML as defining the structure of the content on the page,
                        CSS which plays a role in giving a better appearance to HTML, 
                        and JavaScript adds functionality to make it more interactive.
                    </p>
                </section>
            </main>
        `,
    );
};

const initPage = () => {
    createButtomNavigation();
    createBackdrop();
    createTopAppBar();
    createHeader();
    createContent();
};

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('servWork.js')
        .then((registration) => {
            console.log('Service Worker Registered !');
            console.log(registration);
        })
        .catch((error) => {
            console.log('Sevice Worker Registration Failed !');
            console.log(error);
        });
}

window.onload = initPage();
