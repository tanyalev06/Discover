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