import { Coluna } from "./coluna.js";
import { Main } from "./main.js";
import { Service } from "./service.js";

export class Agencia {
    colunas: Coluna[] = [];
    service = Service.getInstance();
    lembretes: string[] = [];
    constructor(private mainComponent: Main) {
        this.service.lembretes.forEach(lembrete => this.criarColuna(lembrete));
        this.lembretes = this.service.lembretes;
    }
    criarColuna(lembrete: string) {
        this.colunas.push(new Coluna(this.mainComponent, lembrete));
    }
    excluirColuna(coluna: Coluna) {
        this.service.excluirLembrete(coluna.conteudo);
        this.mainComponent.element.removeChild(coluna.element);
        this.colunas.splice(this.colunas.indexOf(coluna), 1);
    }
    excluirTudo() {
        this.colunas.forEach(coluna => {
            coluna.element.remove();
        });
    }
    destroy() {
        this.colunas.forEach(coluna => coluna.destroy());
    }
}