const nav = document.querySelector(".menu__list");
const motors = document.querySelector(".menu__rolling-down-motocykle");
const motorLink = document.querySelector("#motor");
const scooters = document.querySelector(".menu__rolling-down-scooters");
const scootersLink = document.querySelector("#scooters");
const eBikes = document.querySelector(".menu__rolling-down-eBikes");
const eBikesLink = document.querySelector("#eBikes");
const water = document.querySelector(".menu__rolling-down-water");
const waterLink = document.querySelector("#water");
const fourWheels = document.querySelector(".menu__rolling-down-four-wheels");
const fourWheelsLink = document.querySelector("#four-wheels");
const snow = document.querySelector(".menu__rolling-down-snow");
const snowLink = document.querySelector("#snow");
const clothes = document.querySelector(".menu__rolling-down-accesories");
const clothesLink = document.querySelector("#clothes");
// --------------------------BUTTONS---------------------------
const hamburgerBtn = document.querySelector(".menu__button");
const closeNavBtn = document.querySelector(".fa-xmark");
const openNavBtn = document.querySelector(".fa-bars");
// --------------------------MOBILE-MENU-----------------------
hamburgerBtn.addEventListener("click", () => {
    nav.classList.toggle("menu__list-active");
    openNavBtn.classList.toggle("menu__button-hide");
    closeNavBtn.classList.toggle("menu__button-hide");
});
//-----------------------------menu__rolling-down--------------
document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.id === "motor") {
        motors.classList.toggle("menu__rolling-down-active");
        target.classList.add("menu__item-underline");
    }
    else if (target.id !== "motor") {
        motors.classList.remove("menu__rolling-down-active");
        motorLink.classList.remove("menu__item-underline");
    }
    if (target.id === "scooters") {
        scooters.classList.toggle("menu__rolling-down-active");
        target.classList.add("menu__item-underline");
    }
    else if (target.id !== "scooters") {
        scooters.classList.remove("menu__rolling-down-active");
        scootersLink.classList.remove("menu__item-underline");
    }
    if (target.id === "eBikes") {
        eBikes.classList.toggle("menu__rolling-down-active");
        target.classList.add("menu__item-underline");
    }
    else if (target.id !== "eBikes") {
        eBikes.classList.remove("menu__rolling-down-active");
        eBikesLink.classList.remove("menu__item-underline");
    }
    if (target.id === "water") {
        water.classList.toggle("menu__rolling-down-active");
        target.classList.add("menu__item-underline");
    }
    else if (target.id !== "water") {
        water.classList.remove("menu__rolling-down-active");
        waterLink.classList.remove("menu__item-underline");
    }
    if (target.id === "four-wheels") {
        fourWheels.classList.toggle("menu__rolling-down-active");
        target.classList.add("menu__item-underline");
    }
    else if (target.id !== "four-wheels") {
        fourWheels.classList.remove("menu__rolling-down-active");
        fourWheelsLink.classList.remove("menu__item-underline");
    }
    if (target.id === "snow") {
        snow.classList.toggle("menu__rolling-down-active");
        target.classList.add("menu__item-underline");
    }
    else if (target.id !== "snow") {
        snow.classList.remove("menu__rolling-down-active");
        snowLink.classList.remove("menu__item-underline");
    }
    if (target.id === "clothes") {
        clothes.classList.toggle("menu__rolling-down-active");
        target.classList.add("menu__item-underline");
    }
    else if (target.id !== "clothes") {
        clothes.classList.remove("menu__rolling-down-active");
        clothesLink.classList.remove("menu__item-underline");
    }
});
// -----------------------------------PRODUCTS-DATA--------------
let shopItemsData = [
    {
        id: "1",
        name: "R1M",
        img: "images/camera 1.svg",
    },
];
