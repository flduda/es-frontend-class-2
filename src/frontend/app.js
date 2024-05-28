let produtos = []
let endpoint = 'https://raw.githubusercontent.com/guilhermeonrails/api-frontend/main/produtos.json'

buscarProdutosDaApi ()

async function buscarProdutosDaApi() {
    let res = await fetch(endpoint)
    console.log(res);
}
