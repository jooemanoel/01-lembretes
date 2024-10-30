import { Coluna } from "./Coluna.js";
import { Formulario } from "./Formulario.js";
import { Service } from "./service.js";

export class Agencia {
    formulario: Formulario;
    indexColunaEmEdicao = -1;
    listaColunas: Coluna[] = [];
    service: Service;
    lembretes: string[] = [];
    constructor() {
        this.service = new Service();
        this.service.lembretes.forEach(lembrete => this.criarColuna(lembrete));
        this.lembretes = this.service.lembretes;
    }
    criarColuna(lembrete: string) {
        this.listaColunas.push(new Coluna(document.querySelector<HTMLElement>('#principal'), lembrete, this));
    }
    novoLembrete(lembrete: string) {
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
    editarColuna(lembrete: string) {
        this.listaColunas[this.indexColunaEmEdicao].conteudo = lembrete;
        this.listaColunas[this.indexColunaEmEdicao].texto.elemento.textContent = lembrete;
    }
    excluirColuna(coluna: Coluna) {
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