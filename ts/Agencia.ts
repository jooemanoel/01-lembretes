import { Componente } from "./Componente.js";

export class Agencia {
    listaContainers: Componente[] = [];
    conteudosHTML = [];
    constructor() {
        const leitura = JSON.parse(localStorage.getItem('lembretes'));
        console.log(leitura);
        this.conteudosHTML = leitura ? leitura : this.conteudosHTML;
        for (const conteudo of this.conteudosHTML) {
            this.novoLembrete(conteudo);
        }
    }
    novoLembrete(conteudo) {
        const container = new Componente('section', document.querySelector<HTMLElement>('.principal'));
        container.elemento.classList.add('principal__container');

        const texto = new Componente('section', container.elemento);
        texto.elemento.classList.add('principal__container__conteudo');
        texto.elemento.innerHTML = `
            <h1 class="principal__conteudo__texto">${conteudo.titulo}</h1>
            <p class="principal__conteudo__texto">${conteudo.texto}</p>
        `;

        this.listaContainers.push(container);
        if (this.listaContainers.length > this.conteudosHTML.length){
            this.conteudosHTML.push(conteudo);
            localStorage.setItem('lembretes', JSON.stringify(this.conteudosHTML));
        }
    }
    mostrar() {
        for (const container of this.listaContainers) {
            container.mostrar();
        }
    }
    ocultar() {
        for (const container of this.listaContainers) {
            container.ocultar();
        }
    }
}