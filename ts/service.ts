export class Service {
  lembretes: string[] = [];
  constructor() {
    this.lembretes = JSON.parse(localStorage.getItem('lembretes') ?? '[]');
  }
  salvarLembretes() {
    localStorage.setItem('lembretes', JSON.stringify(this.lembretes));
  }
  novoLembrete(lembrete: string) {
    this.lembretes.push(lembrete);
    this.salvarLembretes();
  }
  excluirLembrete(lembrete: string) {
    this.lembretes.splice(this.lembretes.indexOf(lembrete), 1);
    this.salvarLembretes();
  }
}