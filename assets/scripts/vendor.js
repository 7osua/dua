const appBar = document.body.getElementsByTagName('nav').item(0);
const appBarButton = document.getElementById('top-app-bar__button');
const backdrop = document.querySelector('.backdrop');
const drawer = document.querySelector('.drawer');

const showBackdrop = function () {
    backdrop.classList.toggle('open');
};

const showDrawer = function () {
    drawer.classList.toggle('open');
};

const showButtomNavigation = function () {
    showBackdrop();
    showDrawer();
};

appBarButton.addEventListener('click', showButtomNavigation);
backdrop.addEventListener('click', function () {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
});
