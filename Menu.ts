import readlinesync = require('readline-sync')
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Contas';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/Controller/ContaController';



export function menu() {
 
   let opcao, numero, agencia, tipo, saldo, limite, aniversario: number; 
   let titular: string;
   const tiposContas = ['Conta Corrente', 'Conta Poupança'];

     const contas = new ContaController();


//Novas Instâncias da Classe ContaCorrente (Objetos)
contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 1, 'João da Silva', 1000.00, 100.00));

// Novas Instâncias da Classe ContaPoupança (Objetos)
contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10));
contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, 2, "Jean Lima", 15000, 15));
   


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

        console.log("Digite o Número da Agência:")
        agencia = readlinesync.questionInt("");

        console.log("Digite o Nome do Titular:")
        titular = readlinesync.question("");

        console.log("Digite o Tipo da Conta:")
        tipo = readlinesync.keyInSelect(tiposContas ,"", {cancel:false}) + 1;

        console.log("Digite o Saldo da Conta:")
        saldo = readlinesync.questionFloat("");



        switch(tipo){

            case 1: 
          console.log("Digite o Limite da Conta:")
          limite= readlinesync.questionInt("");
          contas.cadastrar(new ContaCorrente(contas.gerarNumero(),  agencia, tipo, titular, saldo, limite ))
            break;

            case 2:  
            console.log("Digite o Dia do Aniversário da Poupança:")
            aniversario = readlinesync.questionInt("");
            contas.cadastrar(new ContaPoupanca(contas.gerarNumero(),  agencia, tipo, titular, saldo, aniversario ))
            break
        }
        keyPress;
        break;

    case 2: 
        console.log("\n\nListar todas as Contas\n\n");
        contas.listarTodas();
        keyPress;
        break;

    case 3: 
        console.log("\n\nConsultar dados da Conta - por número\n\n");
        numero = readlinesync.questionInt(""); 
        contas.procurarPorNumero(numero);
        keyPress;
        break;

    case 4: 
        console.log("\n\nAtualizar dados da Conta\n\n");
        keyPress;
        break;

       case 5: 
        console.log("\n\nApagar uma Conta\n\n");
        keyPress;
        break;

    case 6: 
        console.log("\n\nSaque\n\n");
        keyPress;
        break;

    case 7: 
        console.log("\n\nDepósito\n\n");
        keyPress;
        break;

    case 8: 
        console.log("\n\nTransferência entre Contas\n\n");
        keyPress;
        break;

     case 9: 
      
     if(opcao == 9){
        console.log(colors.fg.red," **********       Saindo do Menu         ************");
        console.log("\nObrigada por Escolher o SantoAndre - O Banco que esconde seu Dinheiro!\n", colors.reset);
        fiz();
        process.exit(0);
        keyPress;
    }
     

    default: 
        console.log("Opção Invalida!!");
        keyPress;
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