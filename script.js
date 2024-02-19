var resultado = ''

function calculoTriangulo() {

    let a = document.getElementById('primeiro_valor').value
    let b = document.getElementById('segundo_valor').value
    let c = document.getElementById('terceiro_valor').value

    console.log(a, b, c)

    if (a + b - c <= 0 || a + c - b <= 0 || b + c - a <= 0 || [a, b, c].includes("0")) {
        resultado = 'Triângulo invalido'
    }

    else if (a === b && b === c) {
        resultado = 'Triângulo equilatero'
    }
    else if (a === b || a === c || b === c) {
        resultado = 'Triângulo isoceles'
    }

    else {
        resultado = 'Triângulo escaleno'
    }

    document.getElementById('resultado').innerHTML = `${resultado}`

}
