import { Agencia } from "./Agencia.js";
import { Formulario } from "./Formulario.js";

// cria a Agência e o Formulário
const agencia = new Agencia();
const formulario = new Formulario(agencia);
agencia.formulario = formulario;
// botao do menu hamburguer para ajuste
const botaoHamburguer = document.querySelector('#botao-hamburguer') as HTMLButtonElement;
// função e evento para mostrar a agência
const mostrarAgencia = () => {
    agencia.mostrar();
    formulario.ocultar();
}
const botaoInicio = document.querySelector('#botao-inicio') as HTMLElement;
botaoInicio.onclick = () => {
    mostrarAgencia();
};
// função e evento para mostrar o formulário
const mostrarNovo = () => {
    agencia.ocultar();
    formulario.mostrar();
}
const botaoNovo = document.querySelector('#botao-novo') as HTMLElement;
botaoNovo.onclick = () => {
    mostrarNovo();
    botaoHamburguer.click();
};
// função e evento para limpar o localStorage
const abrirModalLimpar = () => {
    const botaoAbrirModal = document.querySelector('#botao-abrir-modal') as HTMLButtonElement;
    botaoAbrirModal.click();
}
const botaoLimpar = document.querySelector('#botao-limpar') as HTMLElement;
botaoLimpar.onclick = abrirModalLimpar;
// Botão de confirmar dentro do modal
const limpar = () => {
    localStorage.clear();
    location.reload();
}
const botaoLimparMesmo = document.querySelector('#botao-limpar-mesmo') as HTMLButtonElement;
botaoLimparMesmo.onclick = limpar;
// mostra a agência ao carregar a página
window.onload = () => {
    mostrarAgencia();
}