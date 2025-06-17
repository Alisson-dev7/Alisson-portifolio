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
function insta(){
    window.location.href="https://www.instagram.com/alisson_dev7/?utm_source=ig_web_button_share_sheet";
}
function whats(){
    window.location.href="https://wa.link/h2knx4"
}
function git (){
    window.location.href="https://github.com/Alisson-dev7"
}