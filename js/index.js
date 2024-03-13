(function initBannerSlider() {
    const slidesContainer = document.querySelector('.banner__slides');
    const slides = document.querySelectorAll('.banner .banner__image');

    const dots = document.querySelectorAll('.slide__dot')

    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length
        dots.forEach(dot => dot.classList.remove('active'))
        dots[currentIndex].classList.add('active')
        slidesContainer.style.transform = `translateX(${currentIndex * -100}%)`;
    }, 3000)

})()

function initOutstandingProductsSlides() {
    slides = document.querySelectorAll('.outstanding_products__item')
    let currentIndex = 0
    const barContainer = document.querySelector('.outstanding_products_bars')

    const __slide = () => {
        const bars = barContainer.querySelectorAll('.outstanding_products_bar')
        
        slides.forEach(s => s.classList.remove('active'))
        bars?.forEach(bar => bar.classList.remove('active'))
        
        slides[currentIndex].classList.add('active')
        bars[currentIndex]?.classList.add('active')
    }

    const changeSlide = (e) => {
        currentIndex = parseInt(e.target.getAttribute('data-index'))
        __slide()
    }

    for (let i = 0; i < slides.length; i++) {
        const bar = Object.assign(
            document.createElement('div'),
            {
                className: 'outstanding_products_bar',
            })
        bar.setAttribute('data-index', String(i))
        bar.addEventListener('click', e => changeSlide(e))
        barContainer.appendChild(bar)
    }
    setInterval(e => {
        __slide()
        currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1
    }, 2000)
}
initOutstandingProductsSlides()