import { Agencia } from "./Agencia.js";
import { Formulario } from "./Formulario.js";
// cria a Agência e o Formulário
const agencia = new Agencia();
const formulario = new Formulario();
// botao do menu hamburguer para ajuste
const botaoHamburguer = document.querySelector('#botao-hamburguer');
// Atribui o evento de criar um novo lembrete
formulario.form.elemento.onsubmit = event => {
    event.preventDefault();
    agencia.novoLembrete(formulario.inputLembrete.elemento.value);
    formulario.form.elemento.reset();
    mostrarAgencia();
};
// função e evento para mostrar a agência
const mostrarAgencia = () => {
    agencia.mostrar();
    formulario.ocultar();
};
const botaoInicio = document.querySelector('#botao-inicio');
botaoInicio.onclick = () => {
    mostrarAgencia();
    botaoHamburguer.click();
};
// função e evento para mostrar o formulário
const mostrarNovo = () => {
    agencia.ocultar();
    formulario.mostrar();
    botaoHamburguer.click();
};
const botaoNovo = document.querySelector('#botao-novo');
botaoNovo.onclick = () => {
    mostrarNovo();
    botaoHamburguer.click();
};
// função e evento para limpar o localStorage
const abrirModalLimpar = () => {
    const botaoAbrirModal = document.querySelector('#botao-abrir-modal');
    botaoAbrirModal.click();
};
const botaoLimpar = document.querySelector('#botao-limpar');
botaoLimpar.onclick = abrirModalLimpar;
// Botão de confirmar dentro do modal
const limpar = () => {
    localStorage.clear();
    location.reload();
};
const botaoLimparMesmo = document.querySelector('#botao-limpar-mesmo');
botaoLimparMesmo.onclick = limpar;
// mostra a agência ao carregar a página
window.onload = () => {
    mostrarAgencia();
};
