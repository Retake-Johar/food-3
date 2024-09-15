// menu

let menu = document.querySelector("#menu_icon");
let nav_list = document.querySelector(".nav_list");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav_list.classList.toggle('open');
}



// Dark mode

let dark_mode = document.querySelector('#dark_mode');

dark_mode.onclick = () => {
    if(dark_mode.classList.contains('bxs-moon')){
        dark_mode.classList.replace('bxs-moon', 'bx-sun');
        document.body.classList.add('color');
    }else{
        dark_mode.classList.replace('bx-sun', 'bxs-moon');
        document.body.classList.remove('color');
    }
}

// Search

document.querySelector('#search_icon').onclick = () =>{
    document.querySelector('#search').classList.toggle('open');
}

document.querySelector('#close_icon').onclick = () =>{
    document.querySelector('#search').classList.remove('open');
}



var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});