var swiper = new Swiper(".mySwiper-1" , {
    slidesPerView:1,
    spaceBetweeen: 30,
    loop: true,
    pagination: {
        el:".swiper-pagination",
        clickeable: true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
});

var swiper = new Swiper(".mySwiper-2" , {
    slidesPerView:3,
    spaceBetweeen: 20,
    loop: true,
    loopFillGruoupWithBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        }
    }
});

let tabInput = document.querySelectorAll(".tabInput");

tabInputs.fotEach(function(input){
    input.addEventListener('change', function(){
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
});