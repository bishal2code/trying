let resonsive_menu = document.getElementById("responsive_menu");
resonsive_menu.style.display = "none"

let menu_button = document.getElementById("menu_bar")
menu_button.addEventListener('click',menu)
menu_button.src ="menu.png"

function menu(){
    if(resonsive_menu.style.display == "none"){
        resonsive_menu.style.display = "block"
        menu_button.src ="close.png"
    }
    else{
        resonsive_menu.style.display = "none"
        menu_button.src ="menu.png"
    }
}


