//Declarações de botões
const numButtons = [...document.querySelectorAll('#num')]
const opButtons = [...document.querySelectorAll('#operator')]

let deletar = document.querySelector('#delete')
let clean = document.querySelector('#clean')
let equal = document.querySelector('#equal')
let porcentagem = document.querySelector('#percent')

let operadorDigitado = false;

let screen = document.querySelector('#screen')

//Funções dos botões
function digitarNumero() {
    numButtons.map((el) => {
        el.addEventListener('click', (evt) => {
            let button = evt.target.innerHTML
            screen.innerHTML += button;
            operadorDigitado = false;
        })
    })
}

function digitarOperador() {
    //Operadores comuns
    opButtons.map((el) => {
        el.addEventListener('click', (evt) => {
            let button = evt.target.innerHTML
            if (screen.innerHTML.includes(button) && operadorDigitado) {
                screen.innerHTML = screen.innerHTML.slice(0, -1)
                operadorDigitado = false;
            } else {
                screen.innerHTML += button
                operadorDigitado = true;
            }
        })
    })

    //Operador de resultado
    equal.addEventListener('click', () => {
        screen.innerHTML = screen.innerHTML.replace('÷', '/')
        screen.innerHTML = eval(screen.innerHTML)
    })

    //Limpar tela
    clean.addEventListener('click', () => {
        screen.innerHTML = ""
    })

    //Deletar um dígito
    deletar.addEventListener('click', () => screen.innerHTML = screen.innerHTML.slice(0, -1))

    //Porcentagem
    porcentagem.addEventListener('click', () => {
        screen.innerHTML += "/100"
        screen.innerHTML = eval(screen.innerHTML)
    })

}

digitarNumero()
digitarOperador()