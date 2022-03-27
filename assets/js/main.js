/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menus')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .about__data, .about__info, .about__buttons,.skills__icon,  .card ',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


const tabs=document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

      tabs.forEach(tab =>{
          tab.addEventListener('click',()=>{
              const target = document.querySelector(tab.dataset.target)

              tabContents.forEach(tabContent =>{
                  tabContent.classList.remove('qualification__active')
              })

              target.classList.add('qualification__active')

              tabs.forEach(tab=>{
                tab.classList.remove('qualification__active')
              })
  
            tab.classList.add('qualification__active ')
          })

         

      })

      const img = document.getElementById('carousel');
      const rightBtn = document.getElementById('right-btn');
      const leftBtn = document.getElementById('left-btn');
      
      // Images are from unsplash
      let pictures = ['./assets/img/gallery/1.jpg','./assets/img/gallery/2.jpg',
      './assets/img/gallery/3.jpg','./assets/img/gallery/4.JPG','./assets/img/gallery/5.jpg',
      './assets/img/gallery/6.JPG','./assets/img/gallery/7.jpg','./assets/img/gallery/8.JPG',
      './assets/img/gallery/9.jpg'];
      
      img.src = pictures[0];
      let position = 0;
      
      const moveRight = () => {
          if (position >= pictures.length - 1) {
              position = 0
              img.src = pictures[position];
              return;
          }
          img.src = pictures[position + 1];
          position++;
      }
      
      const moveLeft = () => {
          if (position < 1) {
              position = pictures.length - 1;
              img.src = pictures[position];
              return;
          }
          img.src = pictures[position - 1];
          position--;
      }
      
      rightBtn.addEventListener("click", moveRight);
      leftBtn.addEventListener("click", moveLeft);

