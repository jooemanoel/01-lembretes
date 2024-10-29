import { Componente } from "./Componente.js";
export class Agencia {
    listaColunas = [];
    lembretes = [];
    constructor() {
        const leitura = JSON.parse(localStorage.getItem('lembretes'));
        this.lembretes = leitura ? leitura : this.lembretes;
        for (const lembrete of this.lembretes) {
            this.novoLembrete(lembrete);
        }
    }
    novoLembrete(conteudo) {
        const coluna = new Componente('div', document.querySelector('#principal'));
        coluna.elemento.classList.add('col');
        coluna.elemento.classList.add('col-12');
        coluna.elemento.classList.add('col-md');
        const texto = new Componente('div', coluna.elemento);
        texto.elemento.classList.add('card');
        texto.elemento.innerHTML = `
        <div class="card-header">
            ${conteudo.titulo}
        </div>
        <div class="card-body">
            <p class="card-text">${conteudo.texto}</p>
        </div>
        `;
        this.listaColunas.push(coluna);
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
