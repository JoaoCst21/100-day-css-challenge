const circle = document.querySelector(".circle");
circle.dataset.time = "1.5"

const circles = [];
for (let i = 0; i < 2; i++) {
    const newCircle = document.createElement("div");
    newCircle.classList.add("circle")
    newCircle.style.width = newCircle.style.height = "50%"
    circles.push(newCircle);
}

circles.reduce((bef, curr) => {
    const {time} = bef.dataset;
    curr.dataset.time = `${+time / 2}`
    bef.appendChild(curr);
    return curr;
}, circle)

const wait = (sec) => new Promise(resolve => {
    setTimeout(resolve, sec * 1000);
})

const waitEvent = (obj, eventType, fun) => new Promise(resolve => {
    const newFun = (e) => {
        fun.bind(newFun)(e);
        resolve();
    }
    obj.addEventListener(eventType, newFun)
})

const event = async function (e) {
    await wait(+e.target.dataset.time * .7)
    e.target.removeEventListener("transitionend", this)
    e.target.style.transition = `transform ${+e.target.dataset.time}s cubic-bezier(.95,.21,1,.53)`;
    e.target.style.transform = "scale(0)"
}

const animate = async () => {
    let animate = circle;
    while (animate) {
        const {time} = animate.dataset
        animate.style.transition = `transform ${time}s cubic-bezier(0,1.14,1,1)`;
        animate.style.transform = "scale(1)";
        await waitEvent(animate, "transitionend", event)
        animate = animate.firstElementChild;
    }
}

const frame = document.querySelector(".frame");
const start = () => {
    animate();
    frame.removeEventListener("animationstart", start);
}
frame.addEventListener("animationstart", start)
frame.addEventListener("animationiteration", () => animate())
