const  form = document.getElementById("form-atividade")

let linhas = ''

const imgAprovado = '<td><img src="./images/aprovado.png" alt="foto aprovado"></td>'
const imgReprovado = '<td><img src="./images/reprovado.png" alt="foto aprovado"></td>'
const arrayAtividade = []
const arrayNotas = []
const mensagemAprovado = `<td><span class="resultado aprovado" id="media-final-resultado">Aprovado</span></td>`
const mensagemReprovado = `<td><span class="resultado reprovado" id="media-final-resultado">Reprovado</span></td>`
let  notaMinima = parseFloat(prompt("digite a nota minima"))
verificaNotaMinima()


form.addEventListener('submit', function(e){
    e.preventDefault()

    const inputNomeAtividade = document.getElementById("nome-atividade")
    const inputNotaAtividade = document.getElementById("nota-atividade")

    
    adicionarLinha()
    atualizaLinha()
    calculaMediaFinal()
    atualizaMediaFinal()

    inputNomeAtividade.value =''
    inputNotaAtividade.value =''
    
})
//criando função de atribuir valores as linhas, com o nome, nota e foto
function adicionarLinha(){
    const inputNomeAtividade = document.getElementById("nome-atividade")
    const inputNotaAtividade = document.getElementById("nota-atividade")
    //includes = index do js 
    if(arrayAtividade.includes(inputNomeAtividade.value)){
        alert("esta atividade ja foi inclusa ")
    }else{
        //puxando  valores para o array 
    arrayAtividade.push(inputNomeAtividade.value)
    let valorFloat = parseFloat(inputNotaAtividade.value)
    arrayNotas.push(valorFloat)
    //iniciando o <tr>
    let linha = '<tr>'
    //adicionando cada elemento que o usuario digitou, para depois ser transferido para o escopo global e ser exibido no atualiza linha 
    linha += `<td> ${inputNomeAtividade.value} </td>`
    linha += `<td> ${inputNotaAtividade.value} </td>`
    linha += ` ${inputNotaAtividade.value >=notaMinima  ?/*? = if */ imgAprovado : /* : = else  */ imgReprovado} `
    //finalizando o </tr>
    linha += '</tr>'
    linhas += linha 
    }
    


}
//transfirindo o valor da linha para variavel linhas, para armazenar o valor deles em um escopo global, 
//e para o conteudo de cada linha ser exibido no tbody, atraves da variavel linhas  
function  atualizaLinha(){
    //escolhendo o corpo que eu quero adicionar os elementos HTML atraves do javascript
    let corpoTabela = document.querySelector('tbody')
    //aplicando o conteudo da variavel linhas , atraves do innerHTML , no campo que foi inserido o corpo 
    corpoTabela.innerHTML = linhas
}

//calculando media

function atualizaMediaFinal(){
    const  mediafinal = calculaMediaFinal()

    
    
    document.getElementById("media-final-valor").innerHTML = mediafinal
    document.getElementById("media-final-resultado").innerHTML = mediafinal >=notaMinima ?  mensagemAprovado : mensagemReprovado
 }


function calculaMediaFinal(){
    let somaDasNotas = 0
    for(let i = 0; i < arrayNotas.length ;i++ ){
        somaDasNotas+=arrayNotas[i]
       
    }
    return somaDasNotas/arrayNotas.length


}
//verifiando nota minima

function verificaNotaMinima(){
    let verifica = true 
    while(verifica){

    if(notaMinima <= 0 ||notaMinima > 10 || isNaN(notaMinima)){
        alert("ERROR: nota Minima tem que ser um NÚMERO maior que 0 ou menor que 10")
        notaMinima = parseFloat(prompt("digite novamente a nota minima desejada"))
    }else{
        verifica = false 
    }
    }



}
