// Banco de perguntas simples para teste funcional
const perguntasExpress = [
    {
        id: 1,
        texto: "O Estado deve intervir fortemente na economia para reduzir as desigualdades sociais?",
        opcoes: ["Concordo totalmente", "Concordo parcialmente", "Neutro", "Discordo parcialmente", "Discordo totalmente"]
    },
    {
        id: 2,
        texto: "A liberdade individual deve ser priorizada mesmo quando entra em conflito com tradições culturais?",
        opcoes: ["Concordo totalmente", "Concordo parcialmente", "Neutro", "Discordo parcialmente", "Discordo totalmente"]
    },
    {
        id: 3,
        texto: "A preservação do meio ambiente deve vir antes do crescimento económico acelerado?",
        opcoes: ["Concordo totalmente", "Concordo parcialmente", "Neutro", "Discordo parcialmente", "Discordo totalmente"]
    }
];

let perguntaAtualIndex = 0;

function iniciarQuiz(modo) {
    console.log(`Iniciando Quiz no modo: ${modo}`);
    
    // Procura o container principal para injetar o questionário
    const mainContainer = document.querySelector('main');
    if (!mainContainer) return;

    perguntaAtualIndex = 0;
    renderizarPergunta(mainContainer, modo);
}

function renderizarPergunta(container, modo) {
    if (perguntaAtualIndex >= perguntasExpress.length) {
        container.innerHTML = `
            <section class="text-center py-16 max-w-2xl mx-auto">
                <h2 class="text-3xl font-extrabold text-white mb-4">Teste Concluído! 🎉</h2>
                <p class="text-slate-400 mb-8">As tuas respostas foram processadas com sucesso no modo ${modo}.</p>
                <button onclick="location.reload()" class="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition cursor-pointer">
                    Voltar ao Início
                </button>
            </section>
        `;
        return;
    }

    const q = perguntasExpress[perguntaAtualIndex];

    container.innerHTML = `
        <section class="max-w-2xl mx-auto py-12">
            <div class="bg-slate-800/80 border border-slate-700 p-8 rounded-2xl shadow-xl">
                <div class="flex justify-between items-center mb-6">
                    <span class="text-xs font-mono text-indigo-400 uppercase">Questão ${q.id} de ${perguntasExpress.length}</span>
                    <span class="text-xs bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full font-mono">${modo}</span>
                </div>
                <h2 class="text-xl md:text-2xl font-bold text-white mb-8">${q.texto}</h2>
                
                <div class="space-y-3">
                    ${q.opcoes.map((opcao, index) => `
                        <button onclick="proximaPergunta()" class="w-full text-left p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 hover:border-indigo-500 hover:bg-slate-700/50 text-slate-200 transition font-medium cursor-pointer">
                            ${opcao}
                        </button>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function proximaPergunta() {
    perguntaAtualIndex++;
    const mainContainer = document.querySelector('main');
    renderizarPergunta(mainContainer, 'Express');
}