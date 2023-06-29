var numPar = 0;
var numImpar = 0;

for (let i = 1; i <= 20; i++) {
  var numQuadrado = i * i;
  console.log(numQuadrado);
  if (numQuadrado % 2 == 0) {
    numPar += numQuadrado;
  } else {
    numImpar += numQuadrado;
  }
}
console.log("A soma de quadrados pares é:", numPar);
console.log("A soma de quadrados ímpares é:", numImpar);