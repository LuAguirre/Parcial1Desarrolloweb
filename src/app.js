var regexEmail = /\w+@\w+\.+[a-z]/

const inputs = {
    nombre : document.getElementById('nombreInput'),
    apellido : document.getElementById('apellidoInput'),
    email : document.getElementById('emailInput'),
    password : document.getElementById('passwordInput'),
    direccion : document.getElementById('direccionInput'),
    dpi : document.getElementById('dpiInput'),
    numTarjeta : document.getElementById('numTarjetaInput'),
    pago : document.getElementById('pagoInput')
}

function validateInput(inputElement){
  return  inputElement.value === null || inputElement.value === '';
}

function isAllInputsValid(inputsObject){
  let isValid = true;
    for (key in inputs){
        if (!validateInput(inputs[key])) { isValid = false}
    }
    return isValid;
}

function validarFormulario(){
    if (isAllInputsValid(inputs)){
        alert('Todos los campos deben estar llenos');
        return false;
     } else if (isNaN(inputs.dpi)){
         alert ('El campo Numero de Identificación debe contener datos numericos')
         return false;
     }
     else if (isNaN(inputs.numTarjeta)){
         alert ('El campo Numero de tarjeta debe contener datos numericos')
         return false;
        }
     else if (isNaN(inputs.pago)){
        alert ('El campo Cantidad a pagar debe contener datos numericos')
         return false;
        }
}

document.querySelector('#terminos').addEventListener('click',showConditions);

function showConditions() {

    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', './TerminosYCondiciones.txt', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
           document.querySelector('#TyC').innerHTML = this.responseText; 
        }
    }

}
