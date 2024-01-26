const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const button= document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#result');

button.addEventListener('click', btnOnClik);


function btnOnClik(){
    const sumaInputs = input1.value + input2.value;
    pResultado.innerHTML='resultado:'+ sumaInputs;




}
    


