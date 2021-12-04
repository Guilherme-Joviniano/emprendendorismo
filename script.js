window.addEventListener('scroll', function () {
    let header = document.querySelector('.nav');
    let navlist = this.document.querySelector('.nav-links')
    let windowPosition = window.scrollY > 40;
    header.classList.toggle('scrolling-active', windowPosition);
})
