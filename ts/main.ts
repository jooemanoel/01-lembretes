import { Agencia } from "./Agencia.js";
import { Formulario } from "./Formulario.js";

const agencia = new Agencia();
const formulario = new Formulario();
formulario.form.elemento.onsubmit = event => {
    event.preventDefault();
    const auxTitulo = formulario.inputTitulo.elemento as HTMLInputElement;
    const auxTexto = formulario.textarea.elemento as HTMLTextAreaElement;
    const objeto = { titulo: auxTitulo.value, texto: auxTexto.value };
    agencia.novoLembrete(objeto);
    const aux = formulario.form.elemento as HTMLFormElement;
    aux.reset();
    botaoAgencia.click();
}

const menuItens = document.querySelectorAll('.cabecalho__menu__item');
const listaItens = document.querySelectorAll('.cabecalho__lista__item');
const input = document.querySelector<HTMLInputElement>('.cabecalho__botao');

const mostrarAgencia = ()=>{
    input.checked = false;
    agencia.mostrar();
    formulario.ocultar();
}

const botaoAgencia = <HTMLElement>menuItens[0];
const listaAgencia = <HTMLElement>listaItens[0];
botaoAgencia.onclick = mostrarAgencia;
listaAgencia.onclick = mostrarAgencia;


const mostrarNovo = ()=>{
    input.checked = false;
    agencia.ocultar();
    formulario.mostrar();
}

const botaoNovo = <HTMLElement>menuItens[1];
const listaNovo = <HTMLElement>listaItens[1];
botaoNovo.onclick = mostrarNovo;
listaNovo.onclick = mostrarNovo;

const limpar = ()=>{
    input.checked = false;
    localStorage.clear();
    location.reload();
}

const botaoLimpar = <HTMLElement>menuItens[2];
const listaLimpar = <HTMLElement>listaItens[2];
botaoLimpar.onclick = limpar;
listaLimpar.onclick = limpar;

window.onload = () => {
    mostrarAgencia();
}