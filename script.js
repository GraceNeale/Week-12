const body = document.querySelector("body");
const button = document.querySelector(".style-toggle");
const img = document.querySelector("img");

button.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        img.src = "./cafe_night.png";
    } else {
        img.src = "./cafe.png";
    }
});

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
    question.addEventListener("click", (event) => {

        let clickedQuestion = event.target;

        questions.forEach((question) => {
            const answer = question.nextElementSibling;
            
            if (question != clickedQuestion) {
                answer.classList.remove("show")};
        });

        const answer = question.nextElementSibling;
        answer.classList.toggle("show");
  });
});