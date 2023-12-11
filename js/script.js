//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




// scroll section 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    // scroll header 
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


// swiper section 
const sliderMain = new Swiper('.slider__main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    breakpoints: {
		0: {
			slidesPerView: 2.5,
			spaceBetween: 20
		},
		680: {
			slidesPerView: 3.5,
			spaceBetween: 60
		}
	}
})


function openFullScreenImage(src) {
    document.getElementById("fullscreenImage").src = src;
    document.getElementById("fullscreenImageContainer").style.display = "flex";
  }

  function closeFullScreenImage() {
    document.getElementById("fullscreenImageContainer").style.display = "none";
  }

