const images = ["001.jpg", "002.jpg", "003.jpg"];


const bgDiv = document.body.querySelector("#bg");
bgDiv.style.margin = "0";

// const bgImg = document.createElement("img");

const bgImg = document.body.querySelector("#bgImg");
bgImg.src = `img/${images[Math.floor(Math.random()*images.length)]}`;
bgImg.style.width = "100%";
bgImg.style.position = "fixed";
bgImg.style.zIndex = "-1";
bgImg.style.top = "0";
bgImg.style.backgroundSize = "cover";

// bgImg.style.opacity = "0.5"

// bgImg.style.minHeight = "100px";
// bgImg.style.minWidth = "1024px";
// bgImg.style.height = "auto";
// bgImg.style.left = "0";
// bgImg.style.backgroundPosition = "center";
// bgImg.style.margin = "0";
// bgImg.style.padding = "0";




// bgDiv.appendChild(bgImg);
// bgDiv.style.zIndex = "3";


// document.body.appendChild(bgDiv);
// document.body.style.margin = "0";
