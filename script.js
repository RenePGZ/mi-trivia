document.addEventListener("DOMContentLoaded", () => {
    // Manejador para Multiple Choice
    document.querySelectorAll(".button-group").forEach(group => {
        const feedback = document.getElementById(group.dataset.feedback);
        const buttons = group.querySelectorAll(".btn");

        buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                buttons.forEach(b => {
                    b.classList.remove("correct-style", "incorrect-style");
                });

                if (btn.classList.contains("correct")) {
                    btn.classList.add("correct-style");
                    feedback.textContent = "Correct!";
                    feedback.style.color = "green";
                } else {
                    btn.classList.add("incorrect-style");
                    feedback.textContent = "Incorrect.";
                    feedback.style.color = "red";
                }
            });
        });
    });

    // Manejador para Free Response
    document.querySelectorAll(".check").forEach(button => {
        button.addEventListener("click", () => {
            const input = button.previousElementSibling;
            const feedback = document.getElementById(button.dataset.feedback);
            const correct = button.dataset.answer.toLowerCase();
            const userAnswer = input.value.trim().toLowerCase();

            if (userAnswer === correct) {
                input.style.borderColor = "green";
                feedback.textContent = "Correct!";
                feedback.style.color = "green";
            } else {
                input.style.borderColor = "red";
                feedback.textContent = "Incorrect.";
                feedback.style.color = "red";
            }
        });
    });
});