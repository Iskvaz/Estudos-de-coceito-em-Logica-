Programa
{
 function inicio()
 {
  inteiro opcao

  escreva ("Escolha um jogo de cartas par jogar:\n\n")

  var("1) Magic\n")
  var("2) Heartstone\n")
  var("3) Pokémon TCG\n\n")

  leia (opcao)

  escolha (opcao)
  {
   caso 1:
        escreva("\nVocê vai jogar Magic")
        pare
      caso 2:
        escreva("\nVocê vai jogar Heartstone")
        pare
      caso 3:
        escreva("\nVocê vai jogar Pokémon TCG")
        pare
      caso contrario :
        escreva("\nOpção inválida")
        pare
  }
 }
}