const formulario = document.getElementById("meuFormulario");
      const campoA = document.getElementById("campoA");
      const campoB = document.getElementById("campoB");
      const mensagem = document.getElementById("mensagem");

      formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o formulário de ser submetido

        if (parseInt(campoB.value) > parseInt(campoA.value)) {
          mensagem.textContent = "Formulário válido!";
        } else {
          mensagem.textContent = "Formulário inválido!";
        }
      });