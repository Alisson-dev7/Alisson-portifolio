function menuShow(){
    let menuMobile = document.querySelector(".menu-lateral");
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else{
        menuMobile.classList.add('open');
    }
}
function vangogh (){
    window.location.href= "https://vangogh7.netlify.app";
}