const prompt = require('prompt-sync')();

alturas = [];
entrada = 0;

// Implementar a entrada de dados

for (var i = 1; i <= 10; i++) {
  entrada = parseFloat(prompt(`Digite a altura ${i - 1}: `));
  alturas.push(entrada);
}

// Implementar o processamento de dados
// Fazer for dentro de for

for (var i = 0; i <= 9; i++) {
  soma = 0;
  for (var j = 0; j <= 9; j++) {
    if (alturas[i] > alturas[j]) {
      soma += 1;
    }
  }

  // Implementar a saída de dados

  console.log(`O aluno ${i} é maior que ${soma} aluno(s).`);
}
