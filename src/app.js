import express from "express";
const app = express()
app.use(express.json())
const livros = [
    {id: 1, "título": "Senhor dos Aneis"},
    {id: 2, "título": "O Hobbit"}
]
app.get('/', (req, res) => {
    res.status(200). send('Curso de Node')
})
app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})
app.get('/livros/:id',  (req, res) => {
    let index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.json(livros)
})
app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send('O livro foi cadastrado com sucesso')
})
app.delete('/livros/:id',  (req, res) => {
    let {id} = req.params
    let index = buscaLivro(id)
    livros.splice(index, 1)
    res.send(`Livro ${id} removido com sucesso`)
})
function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app