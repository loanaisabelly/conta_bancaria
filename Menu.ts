import readlinesync = require('readline-sync')
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Contas';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';



export function menu() {
 
let opcao: number; 



   // Objeto da Classe ContaCorrente (Teste)
    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    // Objeto da Classe ContaPoupanca (teste)
    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();


while(true){
    
    console.log(colors.fg.red, "*******************************************");
    console.log("     Banco Santoandre Aquele Vermelho      ");
    console.log("*******************************************");
    console.log("                                           ");
    console.log("     1 - Criar Conta                       ");
    console.log("     2 - Listar todas as Contas            ");
    console.log("     3 - Buscar Conta por Numero           ");
    console.log("     4 - Atualizar Dados da Conta          ");
    console.log("     5 - Apagar conta                      ");
    console.log("     6 - Sacar                             ");
    console.log("     7 - Depositar                         ");
    console.log("     8 - Transferir Valores entre Contas   ");
    console.log("     9 - Sair                              ");
    console.log("                                           ");
    console.log("******************************************" );
    console.log("\nDigite a Opção Desejada:  ",              );

    opcao = readlinesync.questionInt("");

   
    switch(opcao){

    case 1:
        console.log("\n\nCriar Conta\n\n");
        break;

    case 2: 
        console.log("\n\nListar todas as Contas\n\n");
        break;

    case 3: 
        console.log("\n\nConsultar dados da Conta - por número\n\n");
        break;

    case 4: 
        console.log("\n\nAtualizar dados da Conta\n\n");
        break;

       case 5: 
        console.log("\n\nApagar uma Conta\n\n");
        break;

    case 6: 
        console.log("\n\nSaque\n\n");
        break;

    case 7: 
        console.log("\n\nDepósito\n\n");
        break;

    case 8: 
        console.log("\n\nTransferência entre Contas\n\n");
        break;

     case 9: 
      
     if(opcao == 9){
        console.log(colors.fg.red," **********       Saindo do Menu         ************");
        console.log("\nObrigada por Escolher o SantoAndre - O Banco que esconde seu Dinheiro!\n", colors.reset);
        fiz();
        process.exit(0);
    }
     

    default: 
        console.log("Opção Invalida!!");

        break;

    }


}


}


export function fiz(): void {
    console.log( colors.bg.white, colors.fg.black, "\n******************************************");
    console.log("Projeto Desenvolvido por Loana              ");
    console.log("Generation Brasil                           ");
    console.log("******************************************  ", colors.reset);
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

menu()