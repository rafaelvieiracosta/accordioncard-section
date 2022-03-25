const perguntas = document.querySelectorAll(".faq-list dt");

perguntas[1].classList.add('ativo')
perguntas[1].nextElementSibling.classList.add('ativo')

function adicionaClasse() {
  this.classList.toggle("ativo");
  this.nextElementSibling.classList.toggle("ativo");
}

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", adicionaClasse);
});
console.log(perguntas);
