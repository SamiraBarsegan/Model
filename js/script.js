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

// change lungue 
const toggleButton = document.getElementById('toggle-language');
const mainHeading = document.getElementById('main-heading');
const mainHeadingSpan = document.getElementById('main-headingspan');
const mainParagraph = document.getElementById('main-paragraph');
const mainLogo = document.getElementById('logo');
const homeH3 = document.getElementById('home-h3');

let isRussian = true;

  toggleButton.addEventListener('click', () => {
    isRussian = !isRussian;

    if (isRussian) {
        mainLogo.textContent = "Barseghyan Samira";
        homeH3.textContent = "Model, Kids";
        mainHeading.innerHTML = "Hi, I'm <span>Barseghyan Samira</span>";
        mainParagraph.textContent = "My life is a dance in which every outfit is part of my unique story. My days and I are filled with beautiful outfits and dancing emotions.";
      } else {
        mainLogo.textContent = "Барсегян Самира";
        homeH3.textContent = "Модель,Дети";
        mainHeading.innerHTML = "Привет, я <span>Барсегян Самира</span>";
        mainParagraph.textContent = "Моя жизнь — это танец, в котором каждый наряд — часть моей уникальной истории. Мои дни наполнены красивыми нарядами и танцующими эмоциями.";
        
      }
    });
