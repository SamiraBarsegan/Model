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
const homeAbout = document.getElementById('home-about');
const homeContact = document.getElementById('home-contact');
const aHome = document.getElementById('a-home');
const aAbout = document.getElementById('a-about');
const aEducation = document.getElementById('a-education');
const aPortfolio = document.getElementById('a-portfolio');
const aContact = document.getElementById('a-contact');
const aboutMe = document.getElementById('aboutMe');
const aboutH3 = document.getElementById('aboutH3');
const aboutP1 = document.getElementById('aboutP1');
const aboutP2 = document.getElementById('aboutP2');
const aboutP3 = document.getElementById('aboutP3');
const aboutP4 = document.getElementById('aboutP4');
const aboutP5 = document.getElementById('aboutP5');
const aboutP6 = document.getElementById('aboutP6');
const aboutPend = document.getElementById('aboutPend');
const eduHeading = document.getElementById('eduHeading');
const eduH3 = document.getElementById('eduH3');
const eduData1 = document.getElementById('eduData1');
const eduName1 = document.getElementById('eduName1');
const eduP1 = document.getElementById('eduP1');

const eduData2 = document.getElementById('eduData2');
const eduName2 = document.getElementById('eduName2');
const eduP2 = document.getElementById('eduP2');

const eduData3 = document.getElementById('eduData3');
const eduName3 = document.getElementById('eduName3');
const eduP3 = document.getElementById('eduP3');

const eduData4 = document.getElementById('eduData4');
const eduName4 = document.getElementById('eduName4');
const eduP4 = document.getElementById('eduP4');

const portHeading = document.getElementById('portHeading');

const contHeading = document.getElementById('contHeading');

const contName = document.getElementById('contName');
const contEmail = document.getElementById('contEmail');
const contTel = document.getElementById('contTel');
const contSubj = document.getElementById('contSubj');
const contMess = document.getElementById('contMess');

const contSubmit = document.getElementById('contSubmit');

const footerCopy = document.getElementById('footerCopy');

let isRussian = true;

  toggleButton.addEventListener('click', () => {
    isRussian = !isRussian;

    if (isRussian) {
        mainLogo.textContent = "Barseghyan Samira";
        homeH3.textContent = "Model, Kids";
        mainHeading.innerHTML = "Hi, I'm <span>Barseghyan Samira</span>";
        mainParagraph.textContent = "My life is a dance in which every outfit is part of my unique story. My days and I are filled with beautiful outfits and dancing emotions.";
        homeAbout.textContent ="Here I am";
        homeContact.textContent ="Let's Talk";

        aHome.textContent = "Home";
        aAbout.textContent = "About";
        aEducation.textContent = "Activities";
        aPortfolio.textContent = "Portfolio";
        aContact.textContent = "Contacts";

        aboutMe.innerHTML = "About <span>Me</span>";
        aboutH3.textContent= "Model, Kids!";
        aboutP1.textContent= "Samira, the most stylish and vibrant star in this world, where every moment of her life becomes a unique work of art. Her love for fashion is not just a passion; it's a breath, breathed into every created outfit, into every expressive look.";
        aboutP2.textContent= "In her eyes, dance is not just movement; it's a way to transform her love for life and passion for creativity into music. Every movement of her body is the harmony of dance, a unique rhythm that she creates, feeling the freedom of self-expression.";
        aboutP3.textContent= "Her wardrobe is a true palette, where each color reflects her mood, and each fabric tells its own story. She orchestrates a real fashion show on the catwalks of life, where every step is a dance, every stride an expression of confidence and elegance.";
        aboutP4.textContent= "Samira, that name sounds like a melody, and in every movement of hers, the harmony of dance is encapsulated, creating a unique rhythm of her life. Loving to unite fashion and dance, she embodies her ideas in harmonious compositions of styles and movements.";
        aboutP5.textContent= "Her passion for fashion is not just an interest; it's a source of inspiration, an inner fire ignited by the sounds of her favorite music. When she dances, her movements unfold the pages of a book, where every trick is the next crucial moment in her amazing story.";
        aboutP6.textContent= `"My outfits are my language, and dances are my way of communicating with the world. Together, they create a unique kaleidoscope of my creative soul." Samira doesn't just dance in the world of fashion; she creates her own, unparalleled choreographic pattern of life.`;
        aboutPend.innerHTML= `Age: 9 years (11/28/2014) <br>
        Height: 146 cm <br>Shoe size 37<br>
        Brown eyes, brunette`;

        eduHeading.innerHTML = "My <span>Participation</span>";
        eduH3.textContent = "Сompetitions";
        eduData1.textContent = "November 12, 2023";
        eduName1.textContent = `"Magic Universe"`;
        eduP1.textContent = `Won a gold medal and became a 1st degree laureate at the International Competition "Magic Universe" in Izhevsk`;

        eduData2.textContent = "November 18, 2023";
        eduName2.textContent = `"NEW STAR"`;
        eduP2.textContent = `V Republican Open Competition-Festival
        fashion theaters, beginner and professional models
        “NEW STAR” Nomination Runway model Debut laureate 3rd degree`;

        eduData3.textContent = "December 3, 2023";
        eduName3.textContent = `"PROModel 2023"`;
        eduP3.textContent = `All-Russian fashion competition ROModel 2023" 2nd place in the collection show`;

        eduData4.textContent = "December 10, 2023";
        eduName4.textContent = `"Become a Star"`;
        eduP4.textContent = `Won 1st degree laureate in the International competition "Become a Star" in Kazan`;


        portHeading.innerHTML = `My <span>Portfolio</span>`;

        contHeading.innerHTML = `Contact <span>Me</span>`;

        contName.placeholder = "Full Name";
        contEmail.placeholder = "Email Address";
        contTel.placeholder = "Mobile Number";
        contSubj.placeholder = "Email Subject";
        contMess.placeholder = "Your Message";

        contSubmit.textContent = "Submit";

        footerCopy.innerHTML = `Copyright &copy; 2023 by ShostkaBro | All Rights Reserved.`;
      } else {
        mainLogo.textContent = "Барсегян Самира";
        homeH3.textContent = "Модель, Дети";
        mainHeading.innerHTML = "Привет, я <span>Барсегян Самира</span>";
        mainParagraph.textContent = "Моя жизнь — это танец, в котором каждый наряд — часть моей уникальной истории. Мои дни наполнены красивыми нарядами и танцующими эмоциями.";
        homeAbout.textContent ="Вот и Я";
        homeContact.textContent ="Поговорим";

        aHome.textContent = "Главная";
        aAbout.textContent = "Обо мне";
        aEducation.textContent = "Деятельность";
        aPortfolio.textContent = "Портфолио";
        aContact.textContent = "Контакты";

        aboutMe.innerHTML = "Обо <span>мне</span>";
        aboutH3.textContent= "Модель, Дети!";
        aboutP1.textContent= "Самира, самая стильная и яркая звезда в этом мире, где каждый момент её жизни превращается в уникальное произведение искусства. Её любовь к моде — это не просто страсть, это дыхание, вдыхаемое в каждый созданный наряд, в каждый выразительный образ.";
        aboutP2.textContent= "В её глазах танец — не просто движение, а способ превратить свою любовь к жизни и страсть к творчеству в музыку. Каждое движение её тела — это гармония танца, уникальный ритм, который она создаёт, ощущая свободу самовыражения.";
        aboutP3.textContent= "Её гардероб — это настоящая палитра, на которой каждый цвет — отражение её настроения, каждая ткань — собственная история. Она устраивает настоящий показ стиля на модных подиумах жизни, где каждый шаг — это танец, каждая походка — выражение уверенности и элегантности.";
        aboutP4.textContent= "Самира, это имя, звучит как мелодия, а в каждом её движении заключена гармония танца, создавая уникальный ритм своей жизни. Любя объединять моду и танец, она воплощает свои идеи в гармоничных композициях стилей и движений.";
        aboutP5.textContent= "Её страсть к моде не просто интерес, а источник вдохновения, внутренний огонь, разгорающийся под звуки любимой музыки. Когда она танцует, её движения словно раскрывают страницы книги, где каждый трюк — следующий главный момент в её удивительной истории.";
        aboutP6.textContent= "Мои наряды — это мой язык, а танцы — мой способ общения с миром. Вместе они создают уникальный калейдоскоп моей творческой души. Самира не просто танцует в мире моды; она создаёт свой собственный, неповторимый хореографический рисунок жизни.";
        aboutPend.innerHTML= `Возраст: 9 лет (28.11.2014) <br>
        Рост: 146 см<br>Размер обуви 37<br>
        Глаза карие, брюнетка`;

        eduHeading.innerHTML = "Мои <span>Участия </span>";
        eduH3.textContent = "Соревнования";
        eduData1.textContent = "12 ноября 2023 г.";
        eduName1.textContent = `"Magic Universe"`;
        eduP1.textContent = `Завоевали золотую медаль и стали лауреатом 1 степени в Международном конкурсе "Magic Universe" г.Ижевск`;

        eduData2.textContent = "18 ноября 2023 г.";
        eduName2.textContent = `«НОВАЯ ЗВЕЗДА»`;
        eduP2.textContent = `V Республиканский открытый Конкурс-фестиваль
        театров моды, начинающих и профессиональных моделей
        «НОВАЯ ЗВЕЗДА»  Номинация Подиумная модель Дебют лауреат 3 степени.`;

        eduData3.textContent = "3 декабря 2023 г.";
        eduName3.textContent = `"PROModel 2023"`;
        eduP3.textContent = `Всероссийский конкурс моды «PROModel 2023» 2 место в показе коллекции.`;

        eduData4.textContent = "10 декабря 2023 г.";
        eduName4.textContent = `"Стать Звездой"`;
        eduP4.textContent = `Лауреат 1 степени Международного конкурса «Стать Звездой» в Казани.`;


        portHeading.innerHTML = `Моё <span>Портфолио</span>`;

        contHeading.innerHTML = `Свяжитесь <span>со мной</span>`;

        contName.placeholder = "Ваше Имя";
        contEmail.placeholder = "Ваш Email";
        contTel.placeholder = "Ваш телефон";
        contSubj.placeholder = "Тема письма";
        contMess.placeholder = "Ваше сообщение";

        contSubmit.textContent = "Отправить";

        footerCopy.innerHTML = `Авторское право &copy; 2023 от ShostkaBro | Все права защищены.`;
      }
    });
