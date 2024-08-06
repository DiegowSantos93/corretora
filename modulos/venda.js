const prompt = require("prompt-sync")();

const corretor = require("./corretor.js")
const imovel = require("./imovel.js")
const cliente = require("./cliente.js")

const db = [];

let ultimoId = 0;

function getIndice(id){
    const indice = db.findIndex(el =>  el.id == id)

        if (indice != -1){
            return indice
        } else {
            console.log('Id inválido.')
        }
};

const modelo = (id = ++ultimoId) => {
   
    let id_corretor = 0;
    let id_imovel = 0;
    let id_cliente = 0;
    if (corretor.listar() && imovel.listar() && cliente.listar()){
        id_corretor = parseInt(prompt('Digite o ID do corretor: '));
        id_imovel = parseInt(prompt('Digite o ID do imóvel: '));
        id_cliente = parseInt(prompt('Digite o ID do cliente: '));
    }

    const corretorVenda = corretor.mostrar(id_corretor);
    const imovelVenda = imovel.mostrar(id_imovel);
    const clienteVenda = cliente.mostrar(id_cliente);

    if (corretorVenda && imovelVenda && clienteVenda && corretorVenda.idcorretora === imovelVenda.id_corretora) {
        return {
            id,
            id_corretor,
            id_cliente,
            id_imovel
        };
    }

    console.log('Dados inválidos.')
    ultimoId--;
};

const criar = () => {
    const novo = modelo();

    if (novo){
        db.push(novo);
        console.log('Registro criado com sucesso.')
    }
};

const listar = () => {
    if (db.length == 0){
        console.log('Nenhum registro encontrado.')
        return false
    }

    db.forEach(el => console.log(el))
    return true;
};

const atualizar = () => {
    if (listar()){
        const id = parseInt(prompt('Digite o id que deseja atualizar: '))

        const indice = getIndice(id)

        if (indice > -1){
            const novo = modelo(id)
            
            if (novo) {
                db[indice] = novo;
                console.log('Atualizado com sucesso.')
            }
        }
    }
};

const remover = () => {
    if (listar()){

        const id = parseInt(prompt('Digite o id que deseja atualizar: '))

        const indice = getIndice(id);

        if (indice > -1){
            db.splice(indice,1)
            console.log('Removido com sucesso.')
        }
    }
};

module.exports = {criar, listar, atualizar, remover}