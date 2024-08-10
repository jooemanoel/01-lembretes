import { Componente } from "./Componente.js";
export class Agencia {
    listaContainers = [];
    conteudosHTML = [
        {
            titulo: `João - Treinamento`,
            texto: `<h1 class="principal__conteudo__texto">Responsividade em Páginas Web</h1><p class="principal__conteudo__texto">Ao desenvolver páginas da internet, uma boa prática é ajustar os elementos para que se ajustem a diferentes tamanhos de tela, seja com o uso de unidades relativas ou até com a alteração do layout da página para exibição em telas mais estreitas.</p><p class="principal__conteudo__texto">Todas as configurações de ajuste da página podem ser feitas em CSS, e alteradas dinamicamente em determinadas situações com o auxílio de Javascript. Contudo, o próprio CSS nos permite criar estilizações de página excelentes.</p>`
        },
        {
            titulo: `Sobre Mim`,
            texto: `<h1 class="principal__conteudo__texto">Breve Histórico:</h1><p class="principal__conteudo__texto">Nascido em 1993, tenho atualmente 31 anos. Após 10 anos atuando como controlador de tráfego aéreo, estou iniciando uma nova carreira no BB, sendo designado inicialmente para atuar como desenvolvedor front-end.</p><p class="principal__conteudo__texto">Durante as primeiras semanas de treinamento, tive a oportunidade de realizar ótimos cursos na plataforma Alura para desenvolvimento com HTML e CSS, o que me permitiu criar esta página.</p>`
        }
    ];
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
