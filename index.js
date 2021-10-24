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
                <li><a href="#input" id="input">Input</a></li>
                <li><a href="#process" id="process">Hitung</a></li>
                <li><a href="#output" id="output">Output</a></li>
            </ul>
        </nav>
        `
    );
};

const main = () => {
    root.insertAdjacentHTML(
        'afterbegin',
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

const showSection = () => {
    const mainSection = root.getElementsByTagName('section')[0];
    const h2 = document.createElement('h2');
    const sectionName = location.hash; 
    locNow = location.hash;
    console.log(locNow);

    if (location.hash === '#input') {
        h2.textContent = 'Ini Input';
        mainSection.firstElementChild.replaceWith(h2);
    } else if (location.hash === '#process') {
        h2.textContent = 'Ini process';
        mainSection.firstElementChild.replaceWith(h2);
    } else {
        h2.textContent = 'Ini output';
        mainSection.firstElementChild.replaceWith(h2);
    }
};

window.onload = initPage();
const inputSection = document.getElementById('input');
const processSection = document.getElementById('process');
const outputSection = document.getElementById('output');

inputSection.onclick = function () {
    showSection();
};

processSection.onclick = function () {
    showSection();
};

outputSection.onclick = function () {
    showSection();
};
