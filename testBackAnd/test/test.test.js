const { somaNumeros, subtraiNumero } = require('../index');

test('A função deve somar dois números', () => {
  const esperado = 1000;
  const retornado = somaNumeros(800, 200);

  expect(retornado).toBe(esperado);
});

test('A função dese subtrair dois números', () => {
  const esperado = 600;
  const retornado = subtraiNumero(800, 200);

  expect(retornado).toBe(esperado);
});
