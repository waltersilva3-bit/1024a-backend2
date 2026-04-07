/*
// import type { promises } from "node:dns"
//import { TIMEOUT } from "node:dns"

// import { error } from "node:console"
/*
let numero:number = 10
let palavra:string = "Algum texto"
let bol: boolean = true

let x:number|string = 10
x = "Guilherme"

const vetor: number[] = [1,2,3,4,5]
vetor[2] = 10
vetor.push(6)
console.log(vetor)
// vetor = [5,6,7,8,9]

// Vetor de string

let vetorString:string[] = ["a","b","ab"]

type Pessoa={
    id?:number,
    nome:string;
    idade:number
}
const pessoa:Pessoa ={
    id:1,
    nome:"Guilherme",
    idade:18
}
pessoa.nome ="Terezinho"


const cloudVoadora = []

const batataVoadora:undefined = undefined


const func = (nome:string):string=>`${nome} Lindo :3`
func("Tere")

function somaVetor(v:number[]):number{
    const soma = v.reduce((prev,curr)=>prev+curr,0)
    return soma
}
//Corrija o typescript abaixo
function somaVetor2(v:number[]):number{
    let soma = 0
    for (let i = 0; i < v.length; i++) {
        soma = soma + v[i]!
    }
    return soma
}

//Faça uma função que receba um vetor e devolva a soma
//dos valores pares.
/*
function somaPar(v:number[]):number{
    let soma = 0
    for (let i = 0; i < v.length; i++) {
        if(v[i]!%2==0){
            soma  = soma + v[i]!
        }
    }
    return soma
}
console.log(`O valor da somapar é ${somaPar([1,2,3])}`)
*/
//Faça uma função que receba dois vetores e retorne
//um novo vetor com todos os valores passados.
//Exemplo func merge([123],[456]) retorna [1,2,3,4,5,6]



// import express from 'express'

// const app = express()
// app.use(express.json())

// app.get("/", (req, res) => {
//     res.send("Olá Mundo!")
// })

// app.listen(8000, ()=>{
//     console.log("Meu servidor está rodando na porta 8000");
// })


/*
 * Exercício 01 - cria um novo vetor com os valores do vetor original mais dois novos valores
 * Nome da função - criaNovoVetor
 * Crie uma função que retorne um novo vetor com os valores do vetor original mais dois novos valores
 * @param {number[]} vetor Vetor de números
 * @param {number} valor1 Primeiro valor a ser adicionado
 * @param {number} valor2 Segundo valor a ser adicionado
 * @returns {number[]} Retorna um novo vetor com os valores do vetor original mais dois novos valores
 * @example
 * criaNovoVetor([1, 2, 3], 4, 5) // [1, 2, 3, 4, 5]
 * criaNovoVetor([1, 2, 3], 0, 0) // [1, 2, 3, 0, 0]
 */ 

//Início do seu código



//Fim do seu código

/*
 * Exercício 02 - divisivelPor11
 * Nome da função - divisivelPor11
 * Crie uma função que retorna um array com os números divisíveis por 11 no intervalo
 * @param {number} min Número mínimo
 * @param {number} max Número máximo
 * @returns {number[]} Retorna um array com os números divisíveis por 11 no intervalo
 * @example
 *  divisivelPor11(1, 100) // [11, 22, 33, 44, 55, 66, 77, 88, 99]
 *  
 * divisivelPor11(11, 110) // [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
 */

//Início do seu código
/*
 function divisivelPor11(min:number, max:number){
    const vetorDivisiveis11:number[] = []
    for (let i = min; i < max; i++) {
        if (1%11===0) {
            vetorDivisiveis11.push(i)
        }
    }
    return vetorDivisiveis11
 }

//Fim do seu código

//Início do seu código

function criaNovoVetor(vetor:number[],valor1:number,valor2:number){
    const v = vetor.map(x=>x)
    v.push(valor1,valor2)
    return v
}
const vetor2 = [1,2,3]
console.log(criaNovoVetor(vetor2, 0, 0))
console.log(vetor2)

//Fim do seu código

// Comteúdo de hoje   => Promisses

//Assincrona?
function minhaPromessa():Promise<string>{
    const prom:Promise<string> = new Promise<string>((resolve,reject)=>{
        setTimeout(()=>resolve("Tere Erro"),5000)
    })
    return prom
}
minhaPromessa()
.then((valor)=>console.log(valor))
.catch((erro)=>console.log(erro))
console.log("Exectuei esse código")

try{
   const resultado = await minhaPromessa()
   console.log(resultado)
}
catch(erro){
    console.log(erro)
}

//Crie uma função que tenha 50% de chance de retornar "tere" após
// 5 segundos ou a função devolve o valor null
// function devolveTere()

function devolveTere():Promise<string|null>{
    const Devolve = new Promise<string>((resolve, reject)=>{

        if(Math.random()>=0.5){
            setTimeout(()=>console.log("TERE"), 5000)
        }else{
        return null
    }
    })
    return Devolve
}

devolveTere()
.then((valor)=>console.log(valor))
.catch((erro)=>console.log(erro))
console.log("Executei esse código") 
*/

// VETORES
// MAP
// FIND
// SPREAD
/*
const vetor:{id:number,nome:string,idade:number}[] = [
    {id:1,nome:"tere",idade:32},
    {id:1,nome:"Marcelo",idade:67},
    {id:1,nome:"Grande Pablo Joseph VIII",idade:15},
];

//FIND Achar alguem maior de 18 anos?
console.log(vetor.find((x)=>x.idade===18))
//FILTER Achar alguem maior de 18 anos?
console.log(vetor.filter ((x)=>x.idade===33))
//MAP MAPEIA
console.log(vetor.map ((x)=>x.idade===33))



// Obtém o cliente
import mysql from 'mysql2/promise';

// Cria a conexão com o Banco de Dados
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
});

// Using placeholders
try {
  const results = await connection.execute('SELECT * FROM `pessoa`')
  console.log(results);

} catch (err) {
  console.log(err);
}
// Close the connection
await connection.end();
*/
/*
numero = 10;
var palavra = "Algum texto";
var bol = true;
var x = 10;
x = "Guilherme";
var vetor = [1, 2, 3, 4, 5];
vetor[2] = 10;
vetor.push(6);
console.log(vetor);
// vetor = [5,6,7,8,9]
// import express from 'express'
// const app = express()
// app.use(express.json())
// app.get("/", (req, res) => {
//     res.send("Olá Mundo!")
// })
// app.listen(8000, ()=>{
//     console.log("Meu servidor está rodando na porta 8000");
// })
*/

// Get the client
import mysql, { type RowDataPacket, type Connection, type ResultSetHeader } from 'mysql2/promise';

//Erro ao passar o id ou o nome
// status 500

import express from 'express';
const app = express()
app.use(express.json())

//Como cria uma rota no express?
interface IPessoa extends RowDataPacket {
    id: number,
    nome: string,
}
interface IProduto extends RowDataPacket {
    id:number
    nome:string,
    categoria:string,
    preco:number,
    data_criacao:Date,
    data_modificacao:Date,
}

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'luademel',
});

app.get("/pessoas", async (req, res) => {
    try {
        const [dados, campos] =
            await connection.execute<IPessoa[]>('SELECT * FROM pessoa')
        res.status(200).json(dados)
    } catch (err) {
        console.log(err)

            if(err instanceof Error && 'code' in err && err.code==='ECONNREFUSED'){
            return res.status(500).json({mensagem:"ERRO: Ligue o LARAGON e confira o usuário e senha da conexão"})
        }else if(err instanceof Error && 'code' in err && err.code==='ENOTFOUND'){
            return res.status(500).json({mensagem:"ERRO: Você digitou algo errado no host de conexão"})
        }else if(err instanceof Error && 'code' in err && err.code==='ER_BAD_DB_ERROR'){
            return res.status(500).json({mensagem:"ERRO: Confira o nome do banco de dados ou crie um banco com o nome que você passou na conexão"})
        }else if(err instanceof Error && 'code' in err && err.code==='ER_ACCESS_DENIED_ERROR'){
            return res.status(500).json({mensagem:"ERRO: Confira usuario e senha na conexão"})
         }else if(err instanceof Error && 'code' in err && err.code==='ER_PARSE_ERROR'){
            return res.status(500).json({mensagem:"ERRO: Você tem um erro na sua SQL, confira o Execute"})
         }else if(err instanceof Error && 'code' in err && err.code==='ER_NO_SUCH_TABLE'){
            return res.status(500).json({mensagem:"ERRO: Você digitou o nome da tabela errado, confira o Execute!"})
        }else{
            return res.status(500).json({mensagem:"ERRO: Desconhecido!"})
        }
        console.log(err);
    }
})
app.post("/pessoas", async (req, res) => {
    const { id, nome } = req.body

    try {
        const [result] =
            await connection
                .execute<ResultSetHeader>('INSERT INTO pessoa VALUES (?,?)', [id, nome])

         if (result.affectedRows === 0) 
            return res.status(500).json({ mensagem: "Erro ao inserir!" })
        return res.status(201).json({ mensagem: "Sucesso ao inserir!" })
        
    }catch(err){
                if(err instanceof Error && 'code' in err && err.code==='ECONNREFUSED'){
            return res.status(500).json({mensagem:"ERRO: Ligue o LARAGON e confira o usuário e senha da conexão"})
        }else if(err instanceof Error && 'code' in err && err.code==='ENOTFOUND'){
            return res.status(500).json({mensagem:"ERRO: Você digitou algo errado no host de conexão"})
        }else if(err instanceof Error && 'code' in err && err.code==='ER_BAD_DB_ERROR'){
            return res.status(500).json({mensagem:"ERRO: Confira o nome do banco de dados ou crie um banco com o nome que você passou na conexão"})
        }else if(err instanceof Error && 'code' in err && err.code==='ER_ACCESS_DENIED_ERROR'){
            return res.status(500).json({mensagem:"ERRO: Confira usuario e senha na conexão"})
         }else if(err instanceof Error && 'code' in err && err.code==='ER_PARSE_ERROR'){
            return res.status(500).json({mensagem:"ERRO: Você tem um erro na sua SQL, confira o Execute"})
         }else if(err instanceof Error && 'code' in err && err.code==='ER_NO_SUCH_TABLE'){
            return res.status(500).json({mensagem:"ERRO: Você digitou o nome da tabela errado, confira o Execute!"})
        }else{
            return res.status(500).json({mensagem:"ERRO: Desconhecido!"})
        }
    }
    
})
app.listen(8000, () => {
    console.log("Iniciando o servidor na porta 8000")
})

/**
 * No banco de dados 'luademel' crie uma nova tabela chamado produto
 * Na tebela produto, crie os seguintes atributos:
 * id INT
 * nome VARCHAR(300)
 * categoria VARCHAR(300)
 * preco DECIMAL(10,2)
 * data_criacao DATATIME
 * data_modificacao DATATIME
 *
 * crie uma rota chamada `cadastro_produto` que eu possa enviar
 * um JSON para cadastar um novo produto no banco de dadods
 *
 * Crie uma rota chamada `listar produtos´ que retorne todas os
 * produtos cadastrados no banco de dados
 *
 * crie uma rota chamada ´listar_produtos_informatica´ que retorne
 * todos os produtos da categoria informatica
 *
 * Crie uma rota chamada `cadastro_produto` que eu possa enviar
 * um JSON para cadastrar um novo produto no banco de dados
*/


app.post("/cadastro_produto", async (req, res) => {
    const { id, nome, categoria, preco, data_criacao, data_modificacao } = req.body

    if(id==''||id==null||nome==''||categoria==''||preco==''||data_criacao==''||data_modificacao===''){
        return res.status(500).json({mensagem:"Dados enviados no formato errado, confira o JSON"})
    }
    try {
        const [result] =
            await connection
                .execute<ResultSetHeader>('INSERT INTO produto VALUES (?,?,?,?,?,?)', 
                    [id, nome, categoria, preco, data_criacao, data_modificacao])
         if (result.affectedRows === 0) 
            return res.status(500).json({ mensagem: "Erro ao inserir!" })
        return res.status(201).json({ mensagem: "Sucesso ao inserir!" })
        
    }catch(err){
        console.log(err)
                if(err instanceof Error && 'code' in err && err.code==='ECONNREFUSED'){
            return res.status(500).json({mensagem:"ERRO: Ligue o LARAGON e confira o usuário e senha da conexão"})
        }else if(err instanceof Error && 'code' in err && err.code==='ENOTFOUND'){
            return res.status(500).json({mensagem:"ERRO: Você digitou algo errado no host de conexão"})
        }else if(err instanceof Error && 'code' in err && err.code==='ER_BAD_DB_ERROR'){
            return res.status(500).json({mensagem:"ERRO: Confira o nome do banco de dados ou crie um banco com o nome que você passou na conexão"})
        }else if(err instanceof Error && 'code' in err && err.code==='ER_ACCESS_DENIED_ERROR'){
            return res.status(500).json({mensagem:"ERRO: Confira usuario e senha na conexão"})
         }else if(err instanceof Error && 'code' in err && err.code==='ER_PARSE_ERROR'){
            return res.status(500).json({mensagem:"ERRO: Você tem um erro na sua SQL, confira o Execute"})
         }else if(err instanceof Error && 'code' in err && err.code==='ER_NO_SUCH_TABLE'){
            return res.status(500).json({mensagem:"ERRO: Você digitou o nome da tabela errado, confira o Execute!"})
        }else{
            return res.status(500).json({mensagem:"ERRO: Desconhecido!"})
        }
    }
    
})

app.get("/listar_produtos", async (req, res) => {
    try {
        const [dados, campos] =
            await connection.execute<IProduto[]>('SELECT * FROM produtos')
        res.status(200).json(dados)
    } catch (err) {
        console.log(err)

            if(err instanceof Error && 'code' in err && err.code==='ECONNREFUSED'){
            return res.status(500).json({mensagem:"ERRO: Ligue o LARAGON e confira o usuário e senha da conexão"})
        }else if(err instanceof Error && 'code' in err && err.code==='ENOTFOUND'){
            return res.status(500).json({mensagem:"ERRO: Você digitou algo errado no host de conexão"})
        }else if(err instanceof Error && 'code' in err && err.code==='ER_BAD_DB_ERROR'){
            return res.status(500).json({mensagem:"ERRO: Confira o nome do banco de dados ou crie um banco com o nome que você passou na conexão"})
        }else if(err instanceof Error && 'code' in err && err.code==='ER_ACCESS_DENIED_ERROR'){
            return res.status(500).json({mensagem:"ERRO: Confira usuario e senha na conexão"})
         }else if(err instanceof Error && 'code' in err && err.code==='ER_PARSE_ERROR'){
            return res.status(500).json({mensagem:"ERRO: Você tem um erro na sua SQL, confira o Execute"})
         }else if(err instanceof Error && 'code' in err && err.code==='ER_NO_SUCH_TABLE'){
            return res.status(500).json({mensagem:"ERRO: Você digitou o nome da tabela errado, confira o Execute!"})
        }else{
            return res.status(500).json({mensagem:"ERRO: Desconhecido!"})
        }
        console.log(err);
    }
})

app.get("/listar_produtos_informatica", async (req, res) => {
    try {
        const [dados, campos] =
            await connection.execute<IProduto[]>('SELECT * FROM pessoa WHERE categiria="informática"')
        res.status(200).json(dados)
    } catch (err) {
        console.log(err)

            if(err instanceof Error && 'code' in err && err.code==='ECONNREFUSED'){
            return res.status(500).json({mensagem:"ERRO: Ligue o LARAGON e confira o usuário e senha da conexão"})
        }else if(err instanceof Error && 'code' in err && err.code==='ENOTFOUND'){
            return res.status(500).json({mensagem:"ERRO: Você digitou algo errado no host de conexão"})
        }else if(err instanceof Error && 'code' in err && err.code==='ER_BAD_DB_ERROR'){
            return res.status(500).json({mensagem:"ERRO: Confira o nome do banco de dados ou crie um banco com o nome que você passou na conexão"})
        }else if(err instanceof Error && 'code' in err && err.code==='ER_ACCESS_DENIED_ERROR'){
            return res.status(500).json({mensagem:"ERRO: Confira usuario e senha na conexão"})
         }else if(err instanceof Error && 'code' in err && err.code==='ER_PARSE_ERROR'){
            return res.status(500).json({mensagem:"ERRO: Você tem um erro na sua SQL, confira o Execute"})
         }else if(err instanceof Error && 'code' in err && err.code==='ER_NO_SUCH_TABLE'){
            return res.status(500).json({mensagem:"ERRO: Você digitou o nome da tabela errado, confira o Execute!"})
        }else{
            return res.status(500).json({mensagem:"ERRO: Desconhecido!"})
        }
        console.log(err);
    }
})

app.get("/listar_produtos_caros", async (req, res) => {
    try {
        const [dados, campos] =
            await connection.execute<IProduto[]>('SELECT * FROM pessoa WHERE preco>100')
        res.status(200).json(dados)
    } catch (err) {
        console.log(err)

            if(err instanceof Error && 'code' in err && err.code==='ECONNREFUSED'){
            return res.status(500).json({mensagem:"ERRO: Ligue o LARAGON e confira o usuário e senha da conexão"})
        }else if(err instanceof Error && 'code' in err && err.code==='ENOTFOUND'){
            return res.status(500).json({mensagem:"ERRO: Você digitou algo errado no host de conexão"})
        }else if(err instanceof Error && 'code' in err && err.code==='ER_BAD_DB_ERROR'){
            return res.status(500).json({mensagem:"ERRO: Confira o nome do banco de dados ou crie um banco com o nome que você passou na conexão"})
        }else if(err instanceof Error && 'code' in err && err.code==='ER_ACCESS_DENIED_ERROR'){
            return res.status(500).json({mensagem:"ERRO: Confira usuario e senha na conexão"})
         }else if(err instanceof Error && 'code' in err && err.code==='ER_PARSE_ERROR'){
            return res.status(500).json({mensagem:"ERRO: Você tem um erro na sua SQL, confira o Execute"})
         }else if(err instanceof Error && 'code' in err && err.code==='ER_NO_SUCH_TABLE'){
            return res.status(500).json({mensagem:"ERRO: Você digitou o nome da tabela errado, confira o Execute!"})
        }else{
            return res.status(500).json({mensagem:"ERRO: Desconhecido!"})
        }
        console.log(err);
    }
})