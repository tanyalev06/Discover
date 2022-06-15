//самовызывывающаяся функция
(function () {
    const header = document.querySelector('.header');
    //при скроллинге страницы будет выполняться функция 
    window.onscroll = () => {
        //если проскроллили больше 50пикс применить класс актив
        if(window.pageYOffset > 50) {
            header.classList.add('header_active')
        } else {
            header.classList.remove('header_active');
        }
    }
}());

//burger handler
(function () {
    const burgerItem = document.querySelector('.burger');
    // console.log(burgerItem);
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        // console.log(1);
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    })
}());