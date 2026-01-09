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
      pergunta: "Qual é a capital de Curitiba? (ironia)",
      respostas: ["Paraná", "São Paulo", "Rússia Br", "Todas as acima", "sla mn"],
      correta: 4
    },

    {
      pergunta: "Quantas capitais possue a África do Sul?",
      respostas: ["uma", "nenhuma", "duas", "três"],
      correta: 3
    },

    {
      pergunta: "a União Européia é?",
      respostas: ["um país", "um estado", "um ente supranacional", "Mercosul"],
      correta: 2
    },
    {
      pergunta: "Qual país possui formato similar ao Paraná? (ironia)",
      respostas: ["Guiana Brasileira", "Romênia", "Chad", "Rússia"],
      correta: 1
    },
    {
      pergunta: "Quem possui uma bandeira com armas?",
      respostas: ["Moçambique", "França", "Itália", "Colômbia"],
      correta: 0
    },
    {
      pergunta: "A Califórnia possui um Pib?",
      respostas: ["maior que de SP", "menor que o Texas", "igual ao da Colômbia", "maior que o Brasil"],
      correta: 3
    },

    {
      pergunta: "a capital da Austrália é?",
      respostas: ["Sidney", "Camberra", "Melboune", "Auckland"],
      correta: 1
    },

    {
      pergunta: "o pais mais rico em PIB nominal por PPC é",
      respostas: ["México", "EUA", "China", "Lesoto"],
      correta: 2
    },
    {
      pergunta: "A língua mais próxima ao português é",
      respostas: ["Espanhol", "Galego", "Italiano", "português arcaico da Guiana brasileira"],
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

  const progressoContainer = document.createElement("div");
  progressoContainer.id = "progresso-container";
  progressoContainer.style.width = "70%";
  progressoContainer.style.height = "10px";
  progressoContainer.style.backgroundColor = "#ddd";
  progressoContainer.style.margin = "10px 0";

  const barraProgresso = document.createElement("div");
  barraProgresso.id = "barra-progresso";
  barraProgresso.style.height = "100%";
  barraProgresso.style.width = "0%";
  barraProgresso.style.backgroundColor = "#4caf50";
  barraProgresso.style.transition = "width 0.3s";
  progressoContainer.style.borderRadius = "20px"; 

  progressoContainer.appendChild(barraProgresso);
  quiz_block.appendChild(progressoContainer);


  const opcoesEl = document.createElement("div");
  opcoesEl.id = "opcoes-container";

  const resultadoEl = document.createElement("p");
  resultadoEl.id = "resultado";

  const proximaBtn = document.createElement("button");
  proximaBtn.textContent = "Próxima pergunta";
  proximaBtn.className = 'btn_pass';
  proximaBtn.style.marginTop = "20px";

  const pontuacaoFinalEl = document.createElement("p");

  quiz_block.appendChild(perguntaEl);
  quiz_block.appendChild(progressoContainer);
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
          resultadoEl.style.fontSize = "35px"

          pontuacao++;
        } else {
          resultadoEl.textContent = "❌ Resposta errada.";
          resultadoEl.style.color = "red";
          resultadoEl.style.fontSize = "35px"

        }

        
        Array.from(opcoesEl.children).forEach(btn => btn.disabled = true);

        proximaBtn.style.display = "block";
      };

      opcoesEl.appendChild(botao);

      let progresso = ((perguntaAtual) / quiz.length) * 100;
      barraProgresso.style.width = progresso + "%";

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
    barraProgresso.style.width = "100%";
  }

  mostrarPergunta();
});