// Ola mundo

function olaMundo(){
  console.log('Olá mundo!')
}

olaMundo()

function saudacao(nome){
  console.log(`Olá, ${nome}!`)
}

saudacao('Camila')

function dobro(n){
  return n * 2
}

let dobroResult = dobro(3)
console.log(dobroResult)

function media(n1, n2, n3){
  return (n1 + n2 + n3) / 3
} 

console.log(media(2, 10, 6))

function numeroMaior(num1, num2) {
  let maior = num1 > num2 ? 'Primeiro número é maior' : 'Segundo número é maior'
  console.log(maior)
}

numeroMaior(4, 10)

function mult(numero){
  return numero * numero
}

console.log(mult(5))


// Desafios módulo 2

function imc(a, p){
  return p / (a * a)
}

let imcResult = imc(1.50, 70)
console.log(imcResult)


function tabuada(n){
  for (let index = 1; index <= 10; index++) {
    let multNumeros = n * index
    console.log(`${n} x ${index}  = ${multNumeros}`)
  }
}
tabuada(2)

// Desafios módulo 3

let listaGenerica = []

let linguagensDeProgramcao = ['JavaScript','C','C++', 'Kotlin', 'Python']
console.log(linguagensDeProgramcao)

linguagensDeProgramcao.push( 'Java', 'Ruby', 'GoLang')
console.log(linguagensDeProgramcao)

// exiba o primeiro elemento
let nome = ['camila', 'murilo', 'lucia']
console.log(nome[0])

// exiba o segundo elemento
console.log(nome[1])

// exiba o ultimo elemento
console.log(nome[nome.length - 1])

