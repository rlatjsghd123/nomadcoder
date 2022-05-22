const imgs = ['a1.jpg', 'a2.jpg', 'a3.jpg', 'a4.jpg', 'a5.jpg', 'a6.jpg', 'a7.jpg', 'a8.jpg']

const randomImgs = imgs[Math.floor(Math.random() * imgs.length)];

const bgImgs = document.createElement("img");

const body = document.querySelector("body");

bgImgs.src = `img/${randomImgs}`

bgImgs.className = "bg_width"

document.body.appendChild(bgImgs);
