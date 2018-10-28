window.onscroll = function(){
    let topNavBar=document.querySelector('header>nav')
    if(window.scrollY > 20){
      topNavBar.classList.add('sticky')
    }else{
      topNavBar.classList.remove('sticky')
    }
}


