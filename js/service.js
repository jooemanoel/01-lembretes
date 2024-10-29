export class Service {
    lembretes = [];
    constructor() {
        this.lembretes = JSON.parse(localStorage.getItem('lembretes') ?? '[]');
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
}
