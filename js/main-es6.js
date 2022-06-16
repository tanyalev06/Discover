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
    const menuLinks = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click', () => {
        // console.log(1);
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    })
    if(window.innerWidth <= 767) {
        // console.log(1);
        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__nav_active');
            })
        }
    }
}());

// //Scroll to anchors
// (function () {
//     const SmoothScroll = function (targetEI, duration) {
//         const HeaderEIHeight = document.querySelector('.header').clientHeight;
//         let target = document.querySelector(targetEI);
//         let targetPosition = target.getBoundingClientRect().top - HeaderEIHeight;//getBoundingClientRect() - возвращает размер элемента и его позицию относительно viewport (часть страницы, показанная на экране, и которую мы видим).
//         let startPosition = window.pageYOffset;//возвращает количество пикселей, на которое прокручен документ по вертикали (вниз или вверх)
//         let startTime = null;

//         //функция-обработчик скролла - функция IS
//         const ease = function(t,b,c,d) {
//             t /= d / 2;
//             if (t < 1) return c / 2 * t * t + b;
//             t--;
//             return -c / 2 * (t * (t - 2) - 1) + b;
//         };

//         //функция анимации
//         const animation = function(currentTime) {
//             if (startTime === null) startTime = currentTime;
//             const timeELapsed = currentTime - startTime;
//             const run = ease(timeELapsed, startPosition, targetPosition, duration);
//             window.scrollTo(0, run);
//             if (timeELapsed < duration) requestAnimationFrame(animation);
//         };
//         requestAnimationFrame(animation);
//     };
//     //функция подвешивания обработчика события на ссылки
//     const scrollTo = function () {
//         const links = document.querySelectorAll('.js-scroll');
//         links.forEach(each => {
//             each.addEventListener('click', function () {
//                 const currentTarget = this.getAttribute('href');
//                 SmoothScroll(currentTarget, 1000);
//             });
//         });
//     };
//     scrollTo();
// }());