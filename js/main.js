

function soma(n1, n2){
    return n1 + n2
}

function validarIdade(idade){
    var validar
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

idade = prompt("Qual a sua idade?")
console.log(validarIdade(idade))
/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}*/

//alert(soma(5,10))
//alert(setReplace("Vai Japão", "Japão", "Brasil"))

/*
var d = new Date()
alert(d.getDay())
alert(d.getHours())
alert(d.getMinutes())
*/
/*
var d = new Date()
alert(d)*/
/*
var count
for (count=0; count<=5; count++) {
    alert(count)    
}*/
/*
var count = 0
while(count < 5){
    console.log(count)
    alert(count)
    count++
}*/
/*while(count < 5){
    console.log(count)
    count++
}*/
/*var idade = prompt('Qual a sua idade?')
//var idade = 18

if(idade >= 18){
    alert('Maior de idade')
}else{
    alert('Menor de idade')
}*/

/*var frutas = [{nome:'maçã', cor:'vermelha'}, {nome:'uva', cor:'roxa'}]
console.log(frutas)
alert(frutas[1].nome)*/

/*var fruta = {nome:'maçã', cor:'vermelha'}
console.log(fruta)
alert(fruta.cor)*/

//var lista = ['maçã', 'pêra', 'laranja']
//console.log(lista[1])
//lista.push('uva')
//lista.pop()

//alert(lista[1])
//console.log(lista[0])
//console.log(lista.toString()[0])
//console.log(lista.join(' | '))

//var nome = 'Joel de Oliveira'
//var idade = 37
//var idade2 = 10
//var frase = 'Japão tem o melhor time'
//alert(nome + ' tem ' + idade +  'anos')
//alert(idade + idade2)
//console.log(nome)
//console.log(idade + idade2)
//console.log(frase.toUpperCase(frase)