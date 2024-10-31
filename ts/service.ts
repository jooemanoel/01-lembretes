export class Service {
  private static instance: Service;
  lembretes: string[] = [];
  constructor() {
    this.lembretes = JSON.parse(localStorage.getItem('lembretes') ?? '[]');
  }
  public static getInstance(): Service {
    if (!this.instance) {
      this.instance = new Service();
    }
    return this.instance;
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
  editarLembrete(conteudo: string, index: number) {
    this.lembretes[index] = conteudo;
    this.salvarLembretes();
  }
  excluirTudo() {
    this.lembretes = [];
    this.salvarLembretes();
  }
}