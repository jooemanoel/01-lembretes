export class Service {
    static instance;
    lembretes = [];
    indexLembreteEmEdicao = 0;
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
    novoLembrete(value) {
        if (!this.indexLembreteEmEdicao) {
            this.lembretes.push({ id: this.gerarId(), conteudo: value });
            this.salvarLembretes();
        }
        else {
            this.editarLembrete(value);
            this.indexLembreteEmEdicao = 0;
        }
    }
    excluirLembrete(id) {
        this.lembretes = this.lembretes.filter(x => x.id !== id);
        this.salvarLembretes();
    }
    editarLembrete(value) {
        const lembrete = this.lembretes.find(x => x.id === this.indexLembreteEmEdicao);
        if (lembrete)
            lembrete.conteudo = value;
        this.salvarLembretes();
    }
    gerarId() {
        let max = 0;
        this.lembretes.forEach(lembrete => {
            if (lembrete.id > max)
                max = lembrete.id;
        });
        return max + 1;
    }
    ordenar(crescente) {
        if (crescente)
            this.lembretes.sort((a, b) => a.conteudo.localeCompare(b.conteudo));
        else
            this.lembretes.sort((a, b) => b.conteudo.localeCompare(a.conteudo));
        this.salvarLembretes();
    }
}
