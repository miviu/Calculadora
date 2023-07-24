document.getElementById("texto").innerHTML = "Miguel Vicente"
document.getElementById("developer").innerHTML = "Calculadora"
// document.getElementById("img").setAttribute('src', https://avatars.githubusercontent.com/u/136761014?v=4)
function soma() {
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value
    let soma = parseFloat(numero1) + parseFloat(numero2)
    document.getElementById("resultado").innerHTML=soma

}
function sub() {
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value
    let sub = parseFloat(numero1) - parseFloat(numero2)
    document.getElementById("resultado").innerHTML=sub
}
function div() {
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value
    let div = parseFloat(numero1)/parseFloat(numero2)
    document.getElementById("resultado").innerHTML=div
}

function mult() {
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value
    let mult = parseFloat(numero1)*parseFloat(numero2)
    document.getElementById("resultado").innerHTML=mult
}
