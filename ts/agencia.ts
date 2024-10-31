import { Coluna } from "./coluna.js";
import { Component } from "./component.js";
import { Formulario } from "./formulario.js";
import { Main } from "./main.js";
import { Service } from "./service.js";

export class Agencia {
    indexColunaEmEdicao = -1;
    colunas: Coluna[] = [];
    service = Service.getInstance();
    lembretes: string[] = [];
    constructor(private mainComponent: Main) {
        this.service.lembretes.forEach(lembrete => this.criarColuna(lembrete));
        this.lembretes = this.service.lembretes;
    }
    criarColuna(lembrete: string) {
        this.colunas.push(new Coluna(this.mainComponent, lembrete, this));
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
        this.colunas[this.indexColunaEmEdicao].conteudo = lembrete;
        this.colunas[this.indexColunaEmEdicao].texto.element.textContent = lembrete;
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
    mostrar() {
        for (const coluna of this.colunas) {
            coluna.mostrar();
        }
    }
    ocultar() {
        for (const coluna of this.colunas) {
            coluna.ocultar();
        }
    }
}