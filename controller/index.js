document.addEventListener('DOMContentLoaded', () => {

  let perguntaAtual = 0;
  let pontuacao = 0;

  const quiz = [
    {
      pergunta: "Qual é a capital do Uruguai?",
      respostas: ["Montevidéu", "Assunção", "Buenos Aires", "Santiago"],
      correta: 0
    },
    {
      pergunta: "Qual é a capital do Brasil?",
      respostas: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
      correta: 1
    },
    {
      pergunta: "Qual é o rio mais extenso do mundo?",
      respostas: ["Amazonas", "Nilo", "Yangtzé", "Mississippi"],
      correta: 0
    },
    {
      pergunta: "Qual país faz fronteira com o Brasil ao sul?",
      respostas: ["Peru", "Colômbia", "Uruguai", "Venezuela"],
      correta: 2
    },
     {
      pergunta: "Qual é a capital de Curitiba?",
      respostas: ["Paraná", "São Paulo", "Rússia Br", "Todas as acima"],
      correta: 1
    },
  ];

  const main = document.querySelector("main");

  const quiz_block = document.createElement("div");
  quiz_block.id = "quiz_block";
  quiz_block.className = 'column_start';
  main.appendChild(quiz_block);

  const perguntaEl = document.createElement("p");
  perguntaEl.className = 'pergunta';

  const opcoesEl = document.createElement("div");
  opcoesEl.id = "opcoes-container";

  const resultadoEl = document.createElement("p");
  resultadoEl.id = "resultado";

  const proximaBtn = document.createElement("button");
  proximaBtn.textContent = "Próxima pergunta";
  ///proximaBtn.style.display = "none";
  proximaBtn.className = 'btn_pass';

  const pontuacaoFinalEl = document.createElement("p");

  quiz_block.appendChild(perguntaEl);
  quiz_block.appendChild(opcoesEl);
  quiz_block.appendChild(resultadoEl);
  quiz_block.appendChild(proximaBtn);
  quiz_block.appendChild(pontuacaoFinalEl);

  function mostrarPergunta() {
    const perguntaAtualObj = quiz[perguntaAtual];

    perguntaEl.textContent = perguntaAtualObj.pergunta;
    opcoesEl.innerHTML = "";
    resultadoEl.textContent = "";
    proximaBtn.style.display = "none";

    perguntaAtualObj.respostas.forEach((resposta, index) => {
      const botao = document.createElement("button");
      botao.textContent = resposta;
      botao.className = 'btns';

      botao.onclick = () => {
        if (index === perguntaAtualObj.correta) {
          resultadoEl.textContent = "✅ Resposta correta!";
          resultadoEl.style.color = "green";
          pontuacao++;
        } else {
          resultadoEl.textContent = "❌ Resposta errada.";
          resultadoEl.style.color = "red";
        }

        // Impede múltiplos cliques:
        Array.from(opcoesEl.children).forEach(btn => btn.disabled = true);

        proximaBtn.style.display = "block";
      };

      opcoesEl.appendChild(botao);
    });
  }

  proximaBtn.onclick = () => {
    perguntaAtual++;

    if (perguntaAtual < quiz.length) {
      mostrarPergunta();
    } else {
      mostrarPontuacaoFinal();
    }
  };

  function mostrarPontuacaoFinal() {
    quiz_block.innerHTML = "";
    const finalText = document.createElement("p");
    finalText.textContent = `Você acertou ${pontuacao} de ${quiz.length} perguntas!`;
    quiz_block.appendChild(finalText);
  }

  mostrarPergunta();
});