document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel_container');
    const prevButton = document.querySelector('.carousel_btn_prev');
    const nextButton = document.querySelector('.carousel_btn_next');
    const cardWidth = document.querySelector('.carousel_card').offsetWidth;
    const totalCards = carouselContainer.children.length;
    const visibleCards = 4; // Количество видимых карточек
    let currentPosition = 0;

    prevButton.addEventListener('click', () => {
        if (currentPosition < 0) {
            currentPosition += cardWidth;
            carouselContainer.style.transform = `translateX(${currentPosition}px)`;
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPosition > - (totalCards - visibleCards) * cardWidth) {
            currentPosition -= cardWidth;
            carouselContainer.style.transform = `translateX(${currentPosition}px)`;
        }
    });
});