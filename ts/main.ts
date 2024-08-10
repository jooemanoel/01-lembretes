import { Agencia } from "./Agencia.js";
import { Formulario } from "./Formulario.js";

const agencia = new Agencia();
const formulario = new Formulario();
formulario.form.elemento.onsubmit = (event) => {
    event.preventDefault();
    const auxTitulo = formulario.inputTitulo.elemento as HTMLInputElement;
    const auxTexto = formulario.textarea.elemento as HTMLTextAreaElement;
    const objeto = { titulo: auxTitulo.value, texto: auxTexto.value };
    agencia.novoLembrete(objeto);
    const aux = formulario.form.elemento as HTMLFormElement;
    aux.reset();
    botaoAgencia.click();
}

const botaoAgencia = <HTMLButtonElement>document.querySelectorAll('.cabecalho__menu__item')[0];
botaoAgencia.onclick = () => {
    agencia.mostrar();
    formulario.ocultar();
}

const botaoNovo = <HTMLButtonElement>document.querySelectorAll('.cabecalho__menu__item')[1];
botaoNovo.onclick = () => {
    agencia.ocultar();
    formulario.mostrar();
}

const botaoLimpar = <HTMLButtonElement>document.querySelectorAll('.cabecalho__menu__item')[2];
botaoLimpar.onclick = () => {
    localStorage.clear();
    location.reload();
}

window.onload = () => {
    agencia.mostrar();
    formulario.ocultar();
}