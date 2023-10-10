let lista = []
let opcao = ""

do {

   opcao = prompt(` A lista possui ${lista.length} produtos \n 1. Adicionar item \n 2. Ver lista \n 3. Sair`)

  if (opcao == "1") {

    const nome = prompt("Qual o nome do produto?")
    const quantidade = prompt("Quantos são?")
    const confirmacao = confirm(`O produto: ${nome}\n quantidade: ${quantidade}\n estão corretos?`);

    if (confirmacao) {
      lista.push({ nome, quantidade });
      alert("item adicionado com sucesso!")
    } else {
      alert("retornando ao menu");
    }

  } else if (opcao == "2") {    
    if (!lista.length) alert('Não possui nenhum item no banco dados.');
    for (let i = 0; i < lista.length; i++) {
      alert(`Os itens são: ${lista[i].nome} a quantidade é: ${lista[i].quantidade} `)
    }
  }

} while (opcao != "3")