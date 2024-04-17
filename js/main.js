const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcon = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';


closeBtn.addEventListener('click', () => {
    if (mobileNav.classList.contains(navClosedClass)) {
        // Đóng nav
        mobileNav.classList.remove(navClosedClass);
        mobileNav.classList.add(navOpenedClass);

        // Đổi icon
        closeBtnIcon.classList.remove(arrowRightClass);
        closeBtnIcon.classList.add(arrowLeftClass);
    } else {
        // Mở nav
        mobileNav.classList.remove(navOpenedClass);
        mobileNav.classList.add(navClosedClass);

        // Đổi icon
        closeBtnIcon.classList.remove(arrowLeftClass);
        closeBtnIcon.classList.add(arrowRightClass);
    }
});

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
// faq
const faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach((item) => {
  const faqBtn = item.querySelector('.faq__btn');
  item.addEventListener('click',() =>{
    const isOpen = item.classList.toggle('open');
    const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
    const iconElement = faqBtn.querySelector('i');
    iconElement.classList = `${iconClass} text-xl`;
  })
});

// scroll reveal amimations
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 300,
  // reset: true // resets animation
});

// hero
sr.reveal('.hero__text', {origin: 'top'});
sr.reveal('.hero__img');

// stats
sr.reveal('.stats__item',{
  delay: 300,
  distance: '100px',
  interval: 150,
  origin: 'top',
})
// services
sr.reveal('.services');
sr.reveal('.services__top');
sr.reveal('.services__item',{
  delay: 300,
  distance: '100px',
  interval: 150,
  origin: 'bottom',
});

// appointment
sr.reveal('.appointment__title');
sr.reveal('.appointment__form');

// testimonials
sr.reveal('.testimonial');
sr.reveal('.testimonial__container');

// team
sr.reveal('.team__title');
sr.reveal('.team__slider');

// faq
sr.reveal('.faq__title');
sr.reveal('.faq__item',{
  delay: 300,
  distance: '100px',
  interval:150,
  origin:'bottom',
});

// department
sr.reveal('.departments__bg');
sr.reveal('.departments__container');

// blog
sr.reveal('.blog__title');
sr.reveal('.blog__post',{
  delay: 300,
  distance:'100px',
  interval:100,
  origin:'bottom',
});

// brands
sr.reveal('.brands__logo',{
  delay: 300,
  distance:'100px',
  interval:100,
  origin:'bottom',
});

// newsletter
sr.reveal('.newsletter');
sr.reveal('.newsletter__container');

// footer
sr.reveal('.footer__item',{
  delay: 300,
  distance:'100px',
  interval:100,
  origin:'bottom',
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}