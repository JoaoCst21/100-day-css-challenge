const data = document.querySelector(".data");

const points = [...data.querySelectorAll(".point")];

console.log(points)

points.forEach(point => {
    const left = window.getComputedStyle(point).left;
    const top = window.getComputedStyle(point).top;
    console.log(top, left)
    point.nextElementSibling.style.top = `calc(${top} - 80%)`;
    if (point.closest(".graph-1")) point.nextElementSibling.style.left = `calc(${left} - 4%)`;
    else point.nextElementSibling.style.left = `calc(${left} - 3%)`;
})

data.addEventListener("mouseover", (e) => {
    const point = e.target.closest(".point");
    if (!point) return;

    point.nextElementSibling.style.zIndex = "100";
    point.style.zIndex = "101";
    point.nextElementSibling.style.opacity = "1";
    point.nextElementSibling.style.transform = "translate(0, 0)";
})
data.addEventListener("mouseout", (e) => {
    const point = e.target.closest(".point");
    if (!point) return;

    point.nextElementSibling.style.opacity = "0";
    point.nextElementSibling.style.zIndex = "0";
    point.style.zIndex = "1";
    point.nextElementSibling.style.transform = "translate(0, 50%)";

})