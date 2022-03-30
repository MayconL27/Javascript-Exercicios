/* 7. Faça um Programa que calcule a área de um quadrado,
 em seguida mostre o dobro desta área para o usuário.*/

 function areaQuadrado(ladoQuadrado) {
     var area = ladoQuadrado ** 2

     console.log(`Área do quadrado é: ${area} cm²`);
     console.log(`Dobro da área do quadrado ${area ** 2}`);
 }
 areaQuadrado(10)