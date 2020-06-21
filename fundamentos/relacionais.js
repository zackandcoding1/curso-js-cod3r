console.log('01)', '1' == 1) // Igual
console.log('02)', '1' === 1) // Estritamente igual
console.log('03)', '3' != 3) // Diferente
console.log('04)', '3' !== 3) // Estritamente diferente

console.log('05)', 3 < 2) // Menor que
console.log('06)', 3 > 2) // Maior que
console.log('07)', 3 <= 2) // Menor ou igual
console.log('08)', 3 >= 2) // Maior ou igual

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
// Os casos 09 e 10 serão falsos pois os endereços de memória serão comparados
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)