import { Coluna } from "./Coluna.js";
import { Service } from "./service.js";

export class Agencia {
    listaColunas: Coluna[] = [];
    service: Service;
    lembretes: string[] = [];
    constructor() {
        this.service = new Service();
        this.service.lembretes.forEach(lembrete => this.criarColuna(lembrete));
        this.lembretes = this.service.lembretes;
    }
    criarColuna(lembrete: string) {
        this.listaColunas.push(new Coluna(document.querySelector<HTMLElement>('#principal'), lembrete));
    }
    novoLembrete(lembrete: string) {
        this.criarColuna(lembrete);
        this.service.novoLembrete(lembrete);
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