const slider = document.querySelector('[data-slider-element]');
const btnNext = document.querySelector('[data-next-slied]');
const btnPrev = document.querySelector('[data-previous-slied]');

const container = document.querySelector('[data-container]');
// если елемент активный, тогда пусть скролниться


container.addEventListener('click', e => {
    if (e.target.matches('.previous')) {
        for (const element of slider.children) {
            element.style.transform += 'translateX(1000px)';
    
            if (element.matches('.active')) activeElement = element;
        }
    };
    if (e.target.matches('.next')) {
        for (const element of slider.children) {
            element.style.transform += 'translateX(-1000px)';
    
            if (element.matches('.active')) activeElement = element;
        }
        console.dir(slider);
        
        // slider.scrollLeft += 1000;
    };
    
})

