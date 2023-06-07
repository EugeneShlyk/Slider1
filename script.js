const sliderImages = document.querySelectorAll('.slider__img'),
  sliderLine = document.querySelector('.slider__line'),
  sliderDots = document.querySelectorAll('.slider__dot'),
  sliderBtnNext = document.querySelector('.slider__button-next'),
  sliderBtnPrev = document.querySelector('.slider__button-prev');

let sliderCount = 0,
  sliderWidth;

// адаптивность слайдера
window.addEventListener('resize', showSlide);

// кнопки перелистывания слайдов вперёд и назад
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

// автоматическое перелистывание слайдов
setInterval(() => {
  nextSlide()
}, 3000);

// Задаёт нужную ширину картинке и slideLine
const showSlide = () => {
}
