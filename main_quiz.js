const answers = ["b", "b", "b", "c", "b", "b", "b", "c", "b", "b", "a", "a", "b", "c", "a", "a", "b", "b", "a", "c",];
    let currentQuestion = 0;
    let score = 0;

    const questions = document.querySelectorAll('.question');
    const result = document.getElementById("result");
    const checkBtn = document.getElementById("checkBtn");
    const nextBtn = document.getElementById("nextBtn");

    checkBtn.addEventListener('click', () => {
      const current = questions[currentQuestion];
      const selected = current.querySelector('input[type="radio"]:checked');

      if (!selected) {
        alert("Please select an answer!");
        return;
      }

      if (selected.value === answers[currentQuestion]) {
        score++;
        result.textContent = "Correct!";
      } else {
        result.textContent = "Incorrect!";
      }

      checkBtn.style.display = "none";
      nextBtn.style.display = "inline-block";
    });

    nextBtn.addEventListener('click', () => {
      questions[currentQuestion].classList.remove("active");
      currentQuestion++;
      result.textContent = "";

      if (currentQuestion < questions.length) {
        questions[currentQuestion].classList.add("active");
        checkBtn.style.display = "inline-block";
        nextBtn.style.display = "none";
      } else {
        document.getElementById("quizForm").style.display = "none";
        result.textContent = `You scored ${score} out of ${questions.length}!`;
      }
    });