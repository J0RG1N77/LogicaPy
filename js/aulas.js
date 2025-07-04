document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.quiz-section .option');

    options.forEach(option => {
        option.addEventListener('click', function() {
            const quizSection = this.closest('.quiz-section');
            const feedbackDiv = quizSection.querySelector('.feedback');
            const isCorrect = this.getAttribute('data-correct') === 'true';
            const allOptions = quizSection.querySelectorAll('.option');

            // Desabilita todos os botões após a seleção
            allOptions.forEach(opt => {
                opt.disabled = true;
            });

            if (isCorrect) {
                this.classList.add('correct');
                feedbackDiv.textContent = 'Correto!';
                feedbackDiv.className = 'feedback correct-text';
            } else {
                this.classList.add('incorrect');
                feedbackDiv.textContent = 'Incorreto. Tente novamente ou revise a explicação.';
                feedbackDiv.className = 'feedback incorrect-text';

                // Opcional: Mostrar a resposta correta
                allOptions.forEach(opt => {
                    if (opt.getAttribute('data-correct') === 'true') {
                        opt.classList.add('correct');
                    }
                });
            }
        });
    });
});