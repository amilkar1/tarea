//pregunta 2
function calcularSiglo(anio) {
  var siglo=((anio/100)+ 0.49);
  siglo=Math.round(siglo);

  return siglo;
}
console.log(calcularSiglo(1905));
console.log(calcularSiglo(1700));
