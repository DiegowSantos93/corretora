const prompt = require("prompt-sync")();

const corretora = require("./modulos/corretora.js");
const corretor = require("./modulos/corretor.js");
const cliente = require("./modulos/cliente.js");
const imovel = require("./modulos/imovel.js");

console.log('==GERENCIAMENTO DE CORRETORA DE IMÓVEIS==')

while(true){
    
    console.log(`
    O que deseja gerenciar?
    1. Corretora
    2. Corretor
    3. Cliente
    4. Imóvel
    0. Sair
    `);
    
    const opcaoEntidade = parseInt(prompt('Escolha uma opção: '));
    
    let continuar;

    switch (opcaoEntidade) {
        case 1:
            continuar = true;
            while(continuar){
                console.log(`
    GERENCIAMENTO DA CORRETORA
                
    1. Criar
    2. Listar
    3. Atualizar
    4. Remover
    5. Sair
                `);
                
                const opcaoServico = parseInt(prompt('Escolha uma opção: '));
                
                switch (opcaoServico) {
                    case 1:
                    corretora.criar();
                    break;
                case 2:
                    corretora.listar();
                    break;
                case 3:
                    corretora.atualizar();
                    break;
                case 4:
                    corretora.remover();
                    break;
                case 5:
                    continuar = false;
                    break;
                default:
                    console.log('Opção inválida.')
                    break;    
            }
        }
        break;
        case 2:
            continuar = true;
            while(continuar){
                console.log(`
    GERENCIAMENTO DO CORRETOR
                
    1. Criar
    2. Listar
    3. Atualizar
    4. Remover
    5. Sair
                `);
                
                const opcaoServico = parseInt(prompt('Escolha uma opção: '));
                
                switch (opcaoServico) {
                    case 1:
                    corretor.criar();
                    break;
                case 2:
                    corretor.listar();
                    break;
                case 3:
                    corretor.atualizar();
                    break;
                case 4:
                    corretor.remover();
                    break;
                case 5:
                    continuar = false;
                    break;
                default:
                    console.log('Opção inválida.')
                    break;    
            }
        }
        break;
        case 3:
            continuar = true;
            while(continuar){
                console.log(`
    GERENCIAMENTO DO CLIENTE
                
    1. Criar
    2. Listar
    3. Atualizar
    4. Remover
    5. Sair
                `);
                
                const opcaoServico = parseInt(prompt('Escolha uma opção: '));
                
                switch (opcaoServico) {
                    case 1:
                    cliente.criar();
                    break;
                case 2:
                    cliente.listar();
                    break;
                case 3:
                    cliente.atualizar();
                    break;
                case 4:
                    cliente.remover();
                    break;
                case 5:
                    continuar = false;
                    break;
                default:
                    console.log('Opção inválida.')
                    break;    
            }
        }
        break;
        case 4:
            continuar = true;
            while(continuar){
                console.log(`
    GERENCIAMENTO DO IMÓVEL
                
    1. Criar
    2. Listar
    3. Atualizar
    4. Remover
    5. Sair
                `);
                
                const opcaoServico = parseInt(prompt('Escolha uma opção: '));
                
                switch (opcaoServico) {
                    case 1:
                    imovel.criar();
                    break;
                case 2:
                    imovel.listar();
                    break;
                case 3:
                    imovel.atualizar();
                    break;
                case 4:
                    imovel.remover();
                    break;
                case 5:
                    continuar = false;
                    break;
                default:
                    console.log('Opção inválida.')
                    break;    
            }
        }
        break;
        case 0:
                console.log('Saindo do sistema.')
                process.exit();
                break;
        default:
                console.log('Opção inválida.')
                break;
    }
};