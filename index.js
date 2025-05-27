const express = require('express')
const app = express()
const port = 6579
const produtosDb=[]
const usersDb = []

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Olá Jones")
})
app.post("/produtos", (req, res) =>{
    const {nome, preco, categoria} =req.body

     if(!nome || !preco || !categoria){
        return res.status(400).send("Todos os campos são obrigatorios")

     }
        
    const produto = {
        nome:nome, 
        preco:preco, 
        categoria:categoria
    }
    produtosDb.push(produto)
    res.status(201).send(produto)
})

app.get("/produtos", (req, res)=>{
    res.send(produtosDb)
})

app.post("/usuarios", (req, res)=>{
    const {nome, email, senha} = req.body

    if(!nome || !email || !senha)
        return res.status(400).send("Todos os campos são obrigatorios")

    usersDb.push({nome, email,senha})
    res.send("Usuario cadastrado com sucesso!")
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
