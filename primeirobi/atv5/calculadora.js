valorConta = 100;
percentualGorjeta = 15;

valorGorjeta = valorConta * (percentualGorjeta / 100);

valorTotal = valorConta + valorGorjeta;

console.log(`Valor da Conta: ${valorConta}, Gorjeta (${percentualGorjeta}%): ${valorGorjeta}, Total a pagar: ${valorTotal}`);