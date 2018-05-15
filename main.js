document.addEventListener("DOMContentLoaded",function(){
    var nav = document.getElementById("navigation"),
        menu = document.getElementById("nav-list"),
        menuItem = document.getElementsByClassName("nav-item"),
        menuToggle = document.getElementById("nav-toggle");

    window.onscroll = function(e) {
        if(window.scrollY > 100){
            nav.className = "fixed";
        } else {
            nav.className = "";
        }
    };

    menuToggle.onclick = function(e){
        e.preventDefault();
        var newClass = menu.className == "menu-open" ? "" : "menu-open";
        menu.className = newClass;
    };

    for (var i=0;i<menuItem.length; i++) {
        menuItem[i].onclick = function(e){
            menu.className = "";
        };
    }

});