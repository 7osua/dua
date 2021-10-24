const root = document.getElementById('root');

const navigation = () => {
    root.insertAdjacentHTML(
        'beforebegin',
        `
        <nav>
            <div>
                <a>
                    02
                </a>
            </div>
            <ul>
                <li><a href="#input">Input</a></li>
                <li><a href="#process">Hitung</a></li>
                <li><a href="#output">Output</a></li>
            </ul>
        </nav>
        `
    );
};

const main = () => {
    root.insertAdjacentHTML(
        'beforebegin',
        `
        <main>
            <section>
                <h1>Travel Budgetting Harusnya </br> Menjadi Lebih Mudah.</h1>
            </section>
        </main>
        `
    );
};

const footer = () => {
    root.insertAdjacentHTML(
        'afterend',
        `
        <footer>
            <ul>
                <li><a>josua!</a></li>
                <li><a>GitHub</a></li>
                <li><a>LinkeIn</a></li>
                <li><a>Twitter</a></li>
                <li><a>Instagram</a></li>
            <ul>
        </footer>
        `
    );
};

const initPage = () => {
    navigation();
    main();
    footer();
};

window.onload(initPage());
