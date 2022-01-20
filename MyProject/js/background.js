const arrayImages = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage =arrayImages[Math.floor(Math.random() * arrayImages.length)];

const bgImages = document.createElement("img");
bgImages.src = `img/${chosenImage}`;

document.body.appendChild(bgImages);