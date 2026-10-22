document.addEventListener('DOMContentLoaded', () => {
    console.log("Spectrum BR: Sistema Interativo Pronto!");

    const modal = document.getElementById('modal');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalTexto = document.getElementById('modal-texto');
    const modalFechar = document.getElementById('modal-fechar');

    function abrirModal(titulo, texto) {
        if (modal && modalTitulo && modalTexto) {
            modalTitulo.innerText = titulo;
            modalTexto.innerText = texto;
            modal.classList.remove('hidden');
        }
    }

    if (modalFechar) {
        modalFechar.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }

    // Botão Entrar
    const btnLogin = document.getElementById('btn-login');
    if (btnLogin) {
        btnLogin.addEventListener('click', () => {
            abrirModal('Área de Membros', 'O painel de autenticação e login está pronto a ser conectado à base de dados!');
        });
    }

    // Botão Criar Conta
    const btnRegistrar = document.getElementById('btn-registrar');
    if (btnRegistrar) {
        btnRegistrar.addEventListener('click', () => {
            abrirModal('Criar Nova Conta', 'Formulário de registo de utilizadores em fase de integração.');
        });
    }

    // Botões do Menu Superior (Biblioteca, Debates, PRO)
    const navLinks = document.querySelectorAll('.btn-nav');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            abrirModal(link.innerText, `A secção de ${link.innerText} vai carregar os conteúdos dinâmicos do ficheiro JSON.`);
        });
    });

    // Cards dos Testes (Express, Recomendado, Ultra, Pro)
    const cards = document.querySelectorAll('.card-teste');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const modo = card.getAttribute('data-modo') || 'Selecionado';
            abrirModal(`Iniciando Teste: ${modo}`, 'O questionário e o cálculo do gráfico de radar serão iniciados agora!');
        });
    });
});