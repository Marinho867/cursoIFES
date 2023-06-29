const prompt = require('prompt-sync')();
var array_notebooks = [];

do {
  console.log("Sistema de Cadastro de notebooks");
  console.log("1 - Inserir notebook");
  console.log("2 - Excluir notebook");
  console.log("3 - Listar notebook");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo notebook...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let marca = prompt("Digite a marca: ");
    let sist_operacional = prompt("Digite o sistema operacional: ");
    let tela = prompt("Digite o tamanho da tela: ");
    let armazenamento = prompt("Digite o armazenamento: ");

    // Neste trecho estamos declarando um objeto
    const notebook = {
      codigo: codigo,
      marca: marca,
      sist_operacional: sist_operacional,
      tela: tela,
      armazenamento: armazenamento
    }

    // Chamar a função inserir
    inserir_notebook(notebook);

  } else if (opcao == 2) {
    console.log("\n\nExcluindo notebook...\n");
    let codigo = prompt("Digite o código do notebook: ");
    // Chamar a função excluir
    excluir_notebook(codigo)

  } else if (opcao == 3) {
    console.log("\n\nListando notebooks...\n");
    // Chamar a função listar
    listar_notebook();

  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_notebook(notebook) {
  // Implementar corpo da função
  array_notebooks.push(notebook);
}

function excluir_notebook(codigo) {
  // Implementar corpo da função
  for (var i = 0; i <= array_notebooks.length-1; i++) {
    if (array_notebooks[i].codigo == codigo) {
      array_notebooks.splice(i, 1);
    }
  }
}

function listar_notebook() {
  // Implementar corpo da função
  for (var i = 0; i <= array_notebooks.length-1; i++) {
    console.log(array_notebooks[i].codigo, ":", array_notebooks[i].marca, "-", array_notebooks[i].sist_operacional, "-", array_notebooks[i].tela, "-", array_notebooks[i].armazenamento);
  }
}

