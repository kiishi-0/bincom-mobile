let mode = document.getElementById('theme-switch');
let body = document.querySelector('dark-mode');
let navbtn = document.getElementsByClassName("click")
let x = document.getElementById('home');

function response(){
    
    if(x.className === 'navigation'){
        x.className += ' response';
    }
    else{
        x.className = 'navigation'
    }
}

const clicker = () =>{
    x.className =  "navigation"
}
window.addEventListener('scroll', function (){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', this.window.scrollY > 0)
})