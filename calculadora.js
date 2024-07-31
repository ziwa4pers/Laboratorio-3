// Función para realizar las operaciones
function calcular(operador, num1, num2) {
    switch (operador) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return 'Error: División por cero';
        }
        return num1 / num2;
      default:
        return 'Operador no válido';
    }
  }
  
  // Función principal para interactuar con el usuario
  function iniciarCalculadora() {
    let resultados = []; // Array para almacenar los resultados
    for (let i = 0; i < 4; i++) { // Realiza dos iteraciones
      let operador = prompt('Ingrese el operador (+, -, *, /):');
      let num1 = parseFloat(prompt('Ingrese el primer número:'));
      let num2 = parseFloat(prompt('Ingrese el segundo número:'));
      let resultado = calcular(operador, num1, num2);
      resultados.push(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`);
      console.log(resultados[i]);
      alert(resultados[i]);
    }
    // Mostrar ambos resultados en el HTML
    document.getElementById('resultado').innerHTML = resultados.join('<br>');
  }
  
  // Iniciar la calculadora
  iniciarCalculadora();
  
