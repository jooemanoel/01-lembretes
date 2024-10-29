import { Coluna } from "./Coluna.js";
import { Service } from "./service.js";

export class Agencia {
    listaColunas: Coluna[] = [];
    service: Service;
    lembretes: string[] = [];
    constructor() {
        this.service = new Service();
        this.lembretes = JSON.parse(localStorage.getItem('lembretes') ?? '[]');
        this.lembretes.forEach(lembrete => this.novoLembrete(lembrete));
    }
    novoLembrete(conteudo: string) {
        this.listaColunas.push(new Coluna(document.querySelector<HTMLElement>('#principal'), conteudo));
        if (this.listaColunas.length > this.lembretes.length) {
            this.lembretes.push(conteudo);
            localStorage.setItem('lembretes', JSON.stringify(this.lembretes));
        }
    }
    mostrar() {
        for (const coluna of this.listaColunas) {
            coluna.mostrar();
        }
    }
    ocultar() {
        for (const coluna of this.listaColunas) {
            coluna.ocultar();
        }
    }
}