document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');
    const nav = document.querySelector('.navbar');

    menu.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
});
console.log('Script Testing 2')
document.addEventListener('scroll', function () {
    var top = document.getElementById('topper')
    top.style.display = 'flex';
    if (window.scrollY === 0) {
        top.style.display = 'none';
    }
    top.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
});
