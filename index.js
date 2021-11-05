const root = document.getElementById('root');

const createTopAppBar = function () {
    document.body.insertAdjacentHTML(
        'beforeend',
        `
            <nav class="top-app-bar">
                <div class="top-app-bar-row">
                    <section class="top-app-bar-row__section">
                        <button class="top-app-bar-row__icon-button">
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
    createTopAppBar();
    createHeader();
};

window.onload = initPage();

const nav = document.body.getElementsByTagName('nav').item(0);
console.log(nav);
