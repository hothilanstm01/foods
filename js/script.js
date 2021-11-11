$(document).ready(function(){
    $("#search-btn").click(function(){
        $(".search-form-container").toggleClass("active");
        $(".shopping-cart-container").removeClass("active");
        $(".login-form-container").removeClass("active");
        $(".header .navbar").removeClass("active");
    });
});

$(document).ready(function(){
    $("#cart-btn").click(function(){
        $(".shopping-cart-container").toggleClass("active");
        $(".search-form-container").removeClass("active");
        $(".login-form-container").removeClass("active");
        $(".header .navbar").removeClass("active");
    });
});

$(document).ready(function(){
    $("#login-btn").click(function(){
        $(".login-form-container").toggleClass("active");
        $(".search-form-container").removeClass("active");
        $(".shopping-cart-container").removeClass("active");
        $(".header .navbar").removeClass("active");
    });
});

$(document).ready(function(){
    $("#menu-btn").click(function(){
        $(".header .navbar").toggleClass("active");
        $(".search-form-container").removeClass("active");
        $(".shopping-cart-container").removeClass("active");
        $(".login-form-container").removeClass("active");
    });
});

window.onscroll = () => {
    $(".header .navbar").removeClass("active");
}


document.querySelector('.home').onmousemove = (e) =>{

    let x = (window.innerWidth - e.pageX * 2) / 90;
    let y = (window.innerHeight - e.pageY * 2) / 90;

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(${y}px) translateY(${x}px)`;
}

document.querySelector('.home').onmouseleave = () =>{

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(0px) translateY(0px)`;
}