const button = document.querySelector("button");
const lines = document.querySelectorAll(".button-lines");

const activeButton = () => {
    lines.forEach((el, i) => {
        el.classList.add(`transition-line-${i + 1}`)
        setTimeout(() => el.classList.add(`transition-line-2-${i + 1}`), 400)
    })
    button.dataset.active = "true";
}

const desactiveButton = () => {
    lines.forEach((el, i) => {
        el.classList.remove(`transition-line-2-${i + 1}`);
        setTimeout(() => el.classList.remove(`transition-line-${i + 1}`), 400)
    });
    button.dataset.active = "";
}

button.addEventListener("click", () => {
    if (!button.dataset.active) activeButton();
    else desactiveButton();
})