const body = document.querySelector("body");
const button = document.querySelector("button");
const img = document.querySelector("img");

button.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        img.src = "./cafe_night.png";
    } else {
        img.src = "./cafe.png";
    }
});