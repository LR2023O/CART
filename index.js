    var navLinks = document.getElementById("menu-icon");
    function showMenu(){
        navLinks.style.top = "0"
    }
    var navLinks = document.getElementById("nav");
     function hideMenu(){
        navLinks.style.top = "-500px"
    }

    window.onscroll = function(){
        const btn = document.getElementById("pointer");
        if (document.body.scrollTop > 100||document.documentElement.scrollTop > 100){
            btn.style.display = "block";
        }else{
            btn.style.display = "none"
        }
    };
    function scrollToTop(){
        window.scrollTo({top:0, scrollbehavior:'smooth'})
    }
