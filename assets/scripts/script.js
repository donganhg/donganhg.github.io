const bars = document.querySelector(".menu-icon");
const navBar = document.querySelector(".nav-bar");
let check = true;
bars.addEventListener('click', function(event){
    if(check){
        document.querySelector(".nav-bar").style.display = "block";
        
        var x = window.matchMedia("(min-width: 1001px)");
        function barAuto(x) {
            if (x.matches) { // Jika kueri media cocok
                document.querySelector(".nav-bar").style.display = "none";
            } else{
                check = true;
            }
        }
       
        barAuto(x);
        x.addListener(barAuto); 

        check = false;
    } else{
        document.querySelector(".nav-bar").style.display = "none";
        check = true;
    }        
});
