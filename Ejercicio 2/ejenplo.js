//ingrese dos numeros
//comprobar num1 <= num2
//comprobar num2 >= 0
//comprobar num1 < 0 || num1 != 0

var num1 = parseInt(prompt("Ingresa tu primer numero"));
var num2 = parseInt(prompt("Ingresa tu segundo numero"));
if (num1<=num2){
    if (num2>=0){
        if (num1<0 || num1!=0){

        } else{
            console.log("los valores del primer numero son mayores o iguales a 0")
        }
    } else{
        console.log("El segundo numero es menor o igual a 0")
    }
} else {
    console.log("Numero 1 es mayor o igual al numero 2")
}