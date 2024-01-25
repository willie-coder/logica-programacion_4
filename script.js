function fibonacci() {
    let num = Number(prompt("Ingresa un número:"));
    
    while (isNaN(num)) {
      num = Number(prompt("Error: Ingresa un número válido:"));
    }
    
    let fibo = [0, 1];
    
    for (let i = 2; i < num; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    
    console.log(fibo.slice(0, num));
  }
  
  fibonacci();
  