let btnOpen = document.getElementById('open');
let btnClose = document.getElementById('close');
let navBar = document.querySelector('.nav-ul')
let scrolTop = document.getElementById('gotop');


btnOpen.onclick = function(){
    navBar.classList.add('dis-flex');
}

btnClose.onclick = function(){
    navBar.classList.remove('dis-flex');
}

scrolTop.onclick = function(){
    scroll(
        {
        left:0,
        top:0,
        behavior: "smooth"
    }
    )
}

