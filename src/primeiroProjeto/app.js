let botao = document.querySelector ('button')
botao.addEventListener('click', sumOne)

function sumOne (){
    let elementoH3 = document.querySelector ('h3')
    let value = parseInt(elementoH3.textContent)
    let newValue = value + 1 
    elementoH3.textContent = newValue;

    //if the value is =>5

if (newValue == 5) {
    elementoH3.style.color = 'red'
}
}

