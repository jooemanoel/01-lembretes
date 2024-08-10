import { Agencia } from "./Agencia.js";
import { Formulario } from "./Formulario.js";
const agencia = new Agencia();
const formulario = new Formulario();
formulario.form.elemento.onsubmit = (event) => {
    event.preventDefault();
    const auxTitulo = formulario.inputTitulo.elemento;
    const auxTexto = formulario.textarea.elemento;
    const objeto = { titulo: auxTitulo.value, texto: auxTexto.value };
    agencia.novoLembrete(objeto);
    const aux = formulario.form.elemento;
    aux.reset();
    botaoAgencia.click();
};
const botaoAgencia = document.querySelectorAll('.cabecalho__menu__item')[0];
botaoAgencia.onclick = () => {
    agencia.mostrar();
    formulario.ocultar();
};
const botaoNovo = document.querySelectorAll('.cabecalho__menu__item')[1];
botaoNovo.onclick = () => {
    agencia.ocultar();
    formulario.mostrar();
};
window.onload = () => {
    agencia.mostrar();
    formulario.ocultar();
};
