import { Coluna } from "./Coluna.js";
import { Service } from "./service.js";
export class Agencia {
    formulario;
    indexColunaEmEdicao = -1;
    listaColunas = [];
    service;
    lembretes = [];
    constructor() {
        this.service = new Service();
        this.service.lembretes.forEach(lembrete => this.criarColuna(lembrete));
        this.lembretes = this.service.lembretes;
    }
    criarColuna(lembrete) {
        this.listaColunas.push(new Coluna(document.querySelector('#principal'), lembrete, this));
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
        this.listaColunas[this.indexColunaEmEdicao].texto.elemento.textContent = lembrete;
    }
    excluirColuna(coluna) {
        this.service.excluirLembrete(coluna.conteudo);
        coluna.elementoPai.removeChild(coluna.elemento);
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
