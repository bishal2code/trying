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

// Declaring Form
var names = document.getElementById("name")
var addresh = document.getElementById("address")
var guest = document.getElementById("guest")
var date = document.getElementById("date")

// Declaring Priview
let pname = document.getElementById("pname")
var paddresh = document.getElementById("paddress")
var pguest = document.getElementById("pguest")
var pdate = document.getElementById("pdate")
var padult = document.getElementById("padult")
var room_info = document.getElementById("room_info")
var room_qnty = document.getElementById("room_qnty")
var rate = document.getElementById("rate")
var total_rate = document.getElementById("total_rate")
var advance = document.getElementById("advance")
var today_date = document.getElementById("today_date")



function name_change(){
    console.log("Working")
    pname.innerHTML = "Name : " + names.value;
    var date = new Date()

today_date.innerHTML = "Date : "+ date.getFullYear() + "-"+ date.getMonth() + "-"+date.getDay()
}

function guest_change(){
    var room =0;
    var rates = 1000;
    console.log("Guest")
    pguest.innerHTML = "Total Guest : " + guest.value;
    padult.innerHTML = "Adult : " + guest.value;

    if(guest.value <4 & guest.value > 0){
         room = 1;
    }
    else if(guest.value <8 & guest.value > 0){
         room = 2;
    }
    else if(guest.value > 0){
        room = 3;
    }

    if(room > 0){
        
        
        room_info.innerHTML = "Deluxe Room "
        room_qnty.innerHTML = room;
        rate.innerHTML = rates;
        total_rate.innerHTML = rates * room
        var ad = rates * room
        advance.innerHTML = "Advance 25% Rs : "+ad *0.25 +" (25% Advance need to pay for booking)"
    }


}
function date_change(){
    pdate.innerHTML = "Date of Arraival : "+ date.value
}

 function buttonclick(){
    var pay_button = document.getElementById("pay-button")
    pay_button.form.submit()
}




