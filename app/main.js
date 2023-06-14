let livros = []
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaApi ()

async function getBuscarLivrosDaApi() {
    const res = await fetch(endPointDaAPI)
    livros = await res.json()
    livros = aplicarDesconto(livros)
    exibirLivrosNaTela(livrosComDesconto)
}