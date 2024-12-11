"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu = menu;
var readlinesync = require("readline-sync");
function menu() {
    console.log("******************************************");
    console.log("     Banco Santoandre Aquele Vermelho     ");
    console.log("******************************************");
    console.log("     1 - Criar Conta                ");
    console.log("     2 - Listar todas as Contas     ");
    console.log("     3 - Buscar Conta por Numero    ");
    console.log("     4 - Atualizar Dados da Conta   ");
    console.log("     5 - Apagar conta               ");
    console.log("     6 - Sacar                      ");
    console.log("     7 - Depositar                  ");
    console.log("     8 - Transferir Valores entre Contas  ");
    console.log("     9 - Sair                       ");
    console.log("******************************************");
    console.log("\nDigite a Opção Desejada:  ");
    while (true) {
        menu();
        var opcao = void 0;
        opcao = readlinesync.questionInt("");
        switch (opcao) {
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
                console.log("Saindo do Menu.");
                console.log("Obrigada por Escolher o SantoAndre - Pensar no Futuro começa aqui!");
                about();
                break;
            default:
                console.log("Opção Invalida!!");
        }
    }
}
function about() {
    console.log("******************************************");
    console.log("Projeto Desenvolvido por Loana");
    console.log("Generation Brasil");
    console.log("******************************************");
}
