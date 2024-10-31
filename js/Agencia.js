import { Coluna } from "./Coluna.js";
import { Service } from "./service.js";
export class Agencia {
    fatherComponent;
    formulario;
    indexColunaEmEdicao = -1;
    listaColunas = [];
    service = Service.getInstance();
    lembretes = [];
    constructor(fatherComponent) {
        this.fatherComponent = fatherComponent;
        this.service.lembretes.forEach(lembrete => this.criarColuna(lembrete));
        this.lembretes = this.service.lembretes;
    }
    criarColuna(lembrete) {
        this.listaColunas.push(new Coluna(this.fatherComponent.element, lembrete, this));
    }
    novoLembrete(lembrete) {
        if (this.indexColunaEmEdicao === -1) {
            this.criarColuna(lembrete);
            this.service.novoLembrete(lembrete);
        }
        else {
            this.editarColuna(lembrete);
            this.service.editarLembrete(lembrete, this.indexColunaEmEdicao);
            this.indexColunaEmEdicao = -1;
        }
    }
    editarColuna(lembrete) {
        this.listaColunas[this.indexColunaEmEdicao].conteudo = lembrete;
        this.listaColunas[this.indexColunaEmEdicao].texto.element.textContent = lembrete;
    }
    excluirColuna(coluna) {
        this.service.excluirLembrete(coluna.conteudo);
        coluna.fatherElement.removeChild(coluna.element);
        this.listaColunas.splice(this.listaColunas.indexOf(coluna), 1);
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
