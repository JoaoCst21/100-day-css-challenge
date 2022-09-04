const image = document.querySelector(".perfil-photo picture");

const border1 = document.querySelector(".border-1");
const border2 = document.querySelector(".border-2");

console.log(border1, border2)

image.addEventListener("mouseover", () => {
    border2.style.transform = "rotate(180deg)";
    border1.style.transform = "rotate(-180deg)";
})

image.addEventListener("mouseout", () => {
    border2.style.transform = "rotate(-180deg)";
    border1.style.transform = "rotate(180deg)";
})
