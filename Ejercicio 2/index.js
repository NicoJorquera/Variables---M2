var num1 = parseInt(prompt("Ingresa el primer numero"));
var num2 = parseInt(prompt("Ingresa el segundo numero numero"));
if (num1!=num2){
    if (num1>0 && num2>0){
        var suma = num1 + num2;
        var resta = num1 - num2;
        var multi = num1 * num2;
        var divis = num1 / num2;
        
        var modulo = num1%num2;
        
        alert(`La suma corresponde a ${suma}, la resta es ${resta}, la multplicacion igual a ${multi} y finalmente la division es ${divis}. El modulo equivale a ${modulo}`);
    } else {
        console.log("Los numeros son menores a 0");
    }
} else{
    console.log("Los numeros son iguales");
}