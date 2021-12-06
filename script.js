window.addEventListener('scroll', function () {
    let header = document.querySelector('.nav');
    let navlist = this.document.querySelector('.nav-links')
    let windowPosition = window.scrollY > 40;
    header.classList.toggle('scrolling-active', windowPosition);
})
window.addEventListener('scroll', function () {
    let text1 = document.querySelector('#text1');
    let text2 = document.querySelector('#text2');
    let text3 = document.querySelector('#text3');
    let windowPosition = window.scrollY > 900;
    text1.classList.toggle('highlight-text', windowPosition);
    text2.classList.toggle('highlight-text', windowPosition);
    text3.classList.toggle('highlight-text', windowPosition);
})
function changeimage(number){
    image = document.getElementById('images1')
    if (number == 1){
        image.style.backgroundImage = "url('https://image.freepik.com/free-photo/billie-dollar-money-background_1150-749.jpg')";
    }
    if (number == 2){
        image.style.backgroundImage = "url('https://image.freepik.com/free-photo/job-interview-candidate-selection-employment_342744-729.jpg')";
    }
    if(number ==3){
        image.style.backgroundImage = "url('https://image.freepik.com/free-photo/money-writes-with-white-chalk-is-hand-draw-concept_1150-19554.jpg')"
    }
}
function show1(){
    document.getElementsByClassName('fornecedores-locais')[0].style.display = "none"
    document.getElementsByClassName('grandes-fornecedores')[0].style.display = "flex"; 
}
function show2(){
    document.getElementsByClassName('grandes-fornecedores')[0].style.display = "none"; 
    document.getElementsByClassName('fornecedores-locais')[0].style.display = "flex"

}