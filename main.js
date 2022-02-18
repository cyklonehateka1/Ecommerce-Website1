// Selecting DOM elements
const carouselContainer = document.querySelector('.carousel-container');
const imgCard = document.querySelectorAll('.img-card');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let count = 0;
let size = imgCard[0].clientWidth;

rightArrow.addEventListener('click', () => { {
    if (count >= imgCard - 3) return
    carouselContainer.style.transition = "transform 0.4s ease-in-out";
    count++;
    carouselContainer.style.transform = `translateX(${-size * count}px)`
    }
})

leftArrow.addEventListener('click', () => { {
    if (count <= 0) return
    carouselContainer.style.transition = "transform 0.4s ease-in-out";
    count--;
    carouselContainer.style.transform = `translateX(${-size * count}px)`
    }
})


   