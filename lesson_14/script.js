const container = document.querySelector('[data-container]');

console.dir(container);

container.addEventListener('click', (e) => {
    console.log(e);
})

const scrollableElement = document.querySelector('[data-scroll-element]');
scrollableElement.addEventListener('scroll', (e) => {
    console.dir(e.target.scrollLeft);
    // e.target.scrollLeft = 3000;
    e.target.scrollLeft = 3000;


    // console.dir(e.target.children[0].scrollWidth = 2000;);
    // console.dir(e.target.children[1].scrollWidth);
    // console.dir(e.target.children[2].scrollWidth);
});