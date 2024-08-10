import { Componente } from "./Componente.js";
export class Agencia {
    listaContainers = [];
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
        const container = new Componente('section', document.querySelector('.principal'));
        container.elemento.classList.add('principal__container');
        const titulo = new Componente('section', container.elemento);
        titulo.elemento.classList.add('principal__container__titulo');
        titulo.elemento.innerHTML = conteudo.titulo;
        const texto = new Componente('section', container.elemento);
        texto.elemento.classList.add('principal__container__conteudo');
        texto.elemento.innerHTML = conteudo.texto;
        this.listaContainers.push(container);
        if (this.listaContainers.length > this.conteudosHTML.length) {
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
