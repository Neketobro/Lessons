let img = document.createElement('img');
let num = getRandomInt(10);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};
if (num === 0) num = 10; 

document.body.append(img);
img.src = `./image/${num}.png`;
img.alt = 'cat';
img.style.width = '500px';
img.style.height = '500px';