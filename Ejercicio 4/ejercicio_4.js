var texto_anio = " años, ";
var texto_semana = " semanas y ";
var texto_dia = " días.";
var dias = prompt("Ingresa cantidad de días: ");
dias = parseInt(dias);
var anios = Math.floor(dias/365);
if(anios==1){
  texto_anio = " año,";
}
var resto_anio = dias%365;
var semanas = Math.floor(resto_anio/7);
if(semanas==1){
  texto_semana = " semana y "
}
var resto_semana = semanas%7;
if(resto_semana==1){
  texto_dia = " día."
}
console.log(dias+ " días corresponden a: "+anios+texto_anio+semanas+texto_semana+resto_semana+texto_dia);