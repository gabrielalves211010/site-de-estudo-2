// Menu mobile (exemplo simples)
function toggleMenu() {
    // Você pode expandir isso depois
    console.log("Menu clicado");
}

// Modal de agendamento
function abrirAgendamento() {
    alert("Em breve: formulário de agendamento com calendário!");
    // Aqui você pode criar um modal bonito com HTML + CSS
}

// Smooth scroll para links da navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});