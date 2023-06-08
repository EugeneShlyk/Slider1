const sliderImages = document.querySelectorAll('.slider__img'),
  sliderLine = document.querySelector('.slider__line'),
  sliderDots = document.querySelectorAll('.slider__dot'),
  sliderBtnNext = document.querySelector('.slider__button-next'),
  sliderBtnPrev = document.querySelector('.slider__button-prev');

let sliderCount = 0,
  sliderWidth;

// задает шаг перемещения слайдов
const rollSlider = () => {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
};

// Задаёт нужную ширину картинке и slideLine
const showSlide = () => {
  sliderWidth = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
  sliderImages.forEach(item =>
    item.style.width = sliderWidth + 'px'
  );
  rollSlider();
};

showSlide();

// адаптивность слайдера
window.addEventListener('resize', showSlide);



const thisSlide = (index) => {
  sliderDots.forEach(item => item.classList.remove('active-dot'));
  sliderDots[index].classList.add('active-dot');
}

// перелистывает слайд вперед
const nextSlide = () => {
  sliderCount++;
  if (sliderCount >= sliderImages.length) {
    sliderCount = 0;
  }

  rollSlider();
  thisSlide(sliderCount);
};

// перелистывает слайд назад
const prevSlide = () => {
  sliderCount--;
  if (sliderCount < 0) {
    sliderCount = sliderImages.length - 1;
  }

  rollSlider();
  thisSlide(sliderCount);
};

// кнопки перелистывания слайдов вперёд и назад
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

sliderDots.forEach((dot,index) => {
  dot.addEventListener('click', () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  })
})

// автоматическое перелистывание слайдов
setInterval(() => {
  nextSlide()
}, 10000);

