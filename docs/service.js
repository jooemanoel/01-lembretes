export class Service {
    static instance;
    lembretes = [];
    indexLembreteEmEdicao = -1;
    constructor() {
        this.lembretes = JSON.parse(localStorage.getItem('lembretes') ?? '[]');
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Service();
        }
        return this.instance;
    }
    salvarLembretes() {
        localStorage.setItem('lembretes', JSON.stringify(this.lembretes));
    }
    ativarEdicao(index) {
        this.indexLembreteEmEdicao = index;
    }
    novoLembrete(lembrete) {
        if (this.indexLembreteEmEdicao === -1) {
            this.lembretes.push(lembrete);
            this.salvarLembretes();
        }
        else {
            this.editarLembrete(lembrete, this.indexLembreteEmEdicao);
            this.indexLembreteEmEdicao = -1;
        }
    }
    excluirLembrete(lembrete) {
        this.lembretes.splice(this.lembretes.indexOf(lembrete), 1);
        this.salvarLembretes();
    }
    editarLembrete(conteudo, index) {
        this.lembretes[index] = conteudo;
        this.salvarLembretes();
    }
    excluirTudo() {
        this.lembretes = [];
        this.salvarLembretes();
    }
}
