// import { application } from 'express'
import app from './src/app.js'
const port = process.env.PORT || 3000

// const rotas = 
// {
//     '/':'Curso de node',
//     '/livros': 'Esta na página de livros',
//     '/autores': 'Listagem de autores',
//     '/sobre': 'Info sobre o projeto'
// }
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'})
//     res.end('Curso de Node')
//     res.end(rotas[req.url])
// })

app.listen(port, () => {
    console.trace(`Servidor escutando em http://localhost:${port}`)
})