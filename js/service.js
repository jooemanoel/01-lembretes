export class Service {
    static instance;
    lembretes = [];
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
    novoLembrete(lembrete) {
        this.lembretes.push(lembrete);
        this.salvarLembretes();
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
