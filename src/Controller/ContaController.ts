import { arrayBuffer } from "stream/consumers";
import { Conta } from "../model/Contas";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{

    private listaContas: Array<Conta> = new Array<Conta>();
    public numero: number = 0;


    procurarPorNumero(numero: number): void {
       const buscaConta = this.buscarNoArray(numero);
        if(buscaConta !== null)
            buscaConta.visualizar();
            

        else 
        console.log("Numero não Encontrado!")
    }


    listarTodas(): void {
       for(let conta of this.listaContas)
        conta.visualizar();
    }


    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A Conta foi cadastrada com sucesso!")
    }


    atualizar(conta: Conta): void {
        const buscaConta = this.buscarNoArray(conta.numero);

        if(buscaConta !== null){
        this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
        console.log("A Conta foi atualizada com sucesso!")
        }
        else 
        console.log("Numero não Encontrado!")
    }


    deletar(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
        this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1)
        console.log("A Conta foi Deletada com sucesso!")
        }
        else 
        console.log("Numero não Encontrado!")
    }


    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }


    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }


    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    
    public gerarNumero(): number{
        return ++this.numero;
    }


    public buscarNoArray (numero:number): Conta | null{
        for(let conta of this.listaContas){
            if(conta.numero === numero)
                return conta; 
        }
        return null;

    }


}