import { Coluna } from "./Coluna.js";
import { Service } from "./service.js";
export class Agencia {
    listaColunas = [];
    service;
    lembretes = [];
    constructor() {
        this.service = new Service();
        this.lembretes = JSON.parse(localStorage.getItem('lembretes') ?? '[]');
        this.lembretes.forEach(lembrete => this.novoLembrete(lembrete));
    }
    novoLembrete(conteudo) {
        this.listaColunas.push(new Coluna(document.querySelector('#principal'), conteudo));
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
