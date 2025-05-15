document.addEventListener('DOMContentLoaded', () => {
  
// Dados do quiz
const quiz = {
  pergunta: "Qual é a capital do Uruguai?",
  opcoes: ["Montevidéu", "Assunção", "Buenos Aires", "Santiago"],
  resposta: "Montevidéu"
};

// Criando elementos
const main = document.querySelector("main");

const quiz_block = document.createElement("div");
quiz_block.id = "quiz_block ";
quiz_block.className = 'column_start';

// Pergunta
const perguntaEl = document.createElement("p");
perguntaEl.textContent = quiz.pergunta;
perguntaEl.className = 'pergunta';

quiz_block.appendChild(perguntaEl);

// Resultado (criado, mas vazio no início)
const resultadoEl = document.createElement("p");
resultadoEl.id = "resultado";

// Cria uma div para os botões
const opcoesEl = document.createElement("div");
opcoesEl.id = "opcoes-container";


// Criar botões de alternativas
quiz.opcoes.forEach(opcao => {
  const botao = document.createElement("button");
  botao.textContent = opcao;
  botao.className = 'btns'
  
  botao.onclick = () => {
    if (opcao === quiz.resposta) {
      resultadoEl.textContent = "✅ Resposta correta!";
      resultadoEl.style.color = "green";
    } else {
      resultadoEl.textContent = "❌ Resposta errada.";
      resultadoEl.style.color = "red";
    }
  };
  opcoesEl.appendChild(botao);
});

// Adiciona o resultado depois dos botões
quiz_block.appendChild(resultadoEl);
quiz_block.appendChild(perguntaEl);
quiz_block.appendChild(opcoesEl);


// Coloca tudo dentro do <main>
main.appendChild(quiz_block);

})