import { Coluna } from "./coluna.js";
import { Service } from "./service.js";
export class Agencia {
    mainComponent;
    colunas = [];
    service = Service.getInstance();
    lembretes = [];
    constructor(mainComponent) {
        this.mainComponent = mainComponent;
        this.service.lembretes.forEach(lembrete => this.criarColuna(lembrete));
        this.lembretes = this.service.lembretes;
    }
    criarColuna(lembrete) {
        this.colunas.push(new Coluna(this.mainComponent, lembrete));
    }
    excluirColuna(coluna) {
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
