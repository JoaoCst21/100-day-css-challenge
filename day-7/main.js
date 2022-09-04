const notifications = document.querySelectorAll(".notification-popup");
const hamburgerButton = document.querySelector(".hamburger-menu");
const card = document.querySelector(".notifications-card");
const searchButton = document.querySelector(".buscar-button");
const header = document.querySelector(".header")
const elements = [...header.children];
const searchBar = document.querySelector(".search-bar")

notifications.forEach((el, i) => {
    el.style.animation = "showUp 1s both"
    el.style.animationDelay = `${0.3 * i}s`;
})

hamburgerButton.addEventListener("click", () => {
    card.style.transform = card.dataset.open ? "translate(0%, 0)" : "translate(50%, 0)";
    card.dataset.open = card.dataset.open ? "" : "true";
})


searchButton.addEventListener("click", () => {

    const open = searchButton.dataset.open
    setTimeout(() => searchBar.style.zIndex = open ? "-1" : "1", open ? 400 : 0)

    searchBar.style.opacity = open ? "0" : "1";
    searchBar.style.transform = open ? "translate(30%, 0)" : "translate(0, 0)";
    searchButton.dataset.open = open ? "" : "true";
})
