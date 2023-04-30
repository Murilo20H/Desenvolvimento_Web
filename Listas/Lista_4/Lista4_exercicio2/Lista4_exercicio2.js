let nome = window.prompt("Digite o seu nome: ")
let idade = window.prompt("Digite a sua idade: ")
let tagNome = document.getElementById("nome")
tagNome.innerHTML = "O nome digitado foi: " + nome
let tagIdade = document.getElementById("idade")
tagIdade.innerHTML = "A idade digitada foi: " + idade