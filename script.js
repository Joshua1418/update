document.onreadystatechange = function(){
    if(document.readyState == "complete"){
        document.getElementById("loader").style.display = "none";
    }
}

var changeImg = false;

function openNav() {
    document.getElementById("menu_bars").src = changeImg?
     "menu.png" : "close.png"
     document.getElementById("sideNav").style.width = changeImg?
     "0" : "60%"
     changeImg = !changeImg;

}
