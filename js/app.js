document.addEventListener('DOMContentLoaded', () => {
    console.log("Spectrum BR: Sistema Interativo Pronto!");

    // Clique nos Cards dos Testes (Express, Recomendado, Ultra, Pro)
    const cards = document.querySelectorAll('.card-teste');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const modo = card.getAttribute('data-modo') || 'Express';
            
            // Se a função de iniciar o quiz existir no quiz.js, executa-a!
            if (typeof iniciarQuiz === 'function') {
                iniciarQuiz(modo);
            } else {
                alert(`A iniciar questionário do modo ${modo}...`);
            }
        });
    });
});