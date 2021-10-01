//------ SISTEMA DE CLASSIFICAÇÃO EM PAR OU ÍMPAR -------//
let classificacao = window.prompt("Digite um número para classificá-lo como par, ímpar ou zero")
for (let contador = 0; contador <= classificacao; contador = contador + 1) {
    if (contador % 2 == 0 && contador != 0){
       console.log(contador + "  O número " + contador + " é PAR!")
    } else if  (contador % 2 != 0) {
       console.log(contador + "  O número " + contador + " é ÍMPAR!")
    } else { 
       console.log(contador + '  O numero "ZERO" é apenas o "0"')
    }
}