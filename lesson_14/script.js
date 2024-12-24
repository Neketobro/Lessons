const container = document.querySelector('[data-container]');
const slider = document.querySelector('[data-slider-element]');
const btnNext = document.querySelector('[data-next-slied]');
const btnPrev = document.querySelector('[data-previous-slied]');
const dotContainer = document.querySelector('[data-dot-container]');

let activeElement = '';
btnPrev.disabled = true;
btnNext.textContent = '>';
btnPrev.textContent = '<';

container.addEventListener('click', (e) => {
    eventClick(e);
});

function eventClick(e) {
    if (e.target === btnPrev) {
        btnNext.disabled = false;
        btnNext.textContent = '>';
        for (const element of slider.children) {
            element.style.transform += `translateX(1000px)`;
            if (element.matches('.active')) activeElement = element;
        }
        activeElement.classList.remove('active');
        activeElement.previousElementSibling.classList.add('active');

        if (activeElement.previousElementSibling.previousElementSibling === null) {
            btnPrev.disabled = true;
            btnPrev.textContent = '';
        };
    }

    if (e.target === btnNext) {
        btnPrev.disabled = false;
        btnPrev.textContent = '<';

        for (const element of slider.children) {
            element.style.transform += `translateX(-1000px)`;
            if (element.matches('.active')) activeElement = element;
        }
        activeElement.classList.remove('active');
        activeElement.nextElementSibling.classList.add('active');

        if (activeElement.nextElementSibling.nextElementSibling === null) {
            btnNext.disabled = true;
            btnNext.textContent = '';
        };
    }
    dotStyle();
}

function dotCreator() {
    for (const element of slider.children) {
        if (element.matches('.active')) activeElement = element;

        if (slider.children.length === dotContainer.children.length) return;
        let dot = document.createElement('div');
        dot.setAttribute('class', 'dot-style');
        dotContainer.append(dot);
    }
    dotStyle();
}
dotCreator();

function dotStyle() {
    let activeIndex = -1;
    for (let i = 0; i < slider.children.length; i++) {
        if (slider.children[i].classList.contains('active')) {
            activeIndex = i;
            break;
        }
    }
    for (let i = 0; i < dotContainer.children.length; i++) {
        if (i === activeIndex) {
            dotContainer.children[i].style.opacity = 1;
        } else {
            dotContainer.children[i].style.opacity = 0.5;
        }
    }
}