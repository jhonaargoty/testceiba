const funciones = require("../functions/functions");

test('La fecha es real en calendario', () => {
    expect(funciones.existefecha('27/12/2020')).toBe(true);
});
test('La fecha NO es real en calendario (MES)', () => {
    expect(funciones.existefecha('27/13/2020')).toBe(false);
});
test('La fecha NO es real en calendario (DIA)', () => {
    expect(funciones.existefecha('48/12/2020')).toBe(false);
});
test('La fecha NO es real en calendario (MES-DIA)', () => {
    expect(funciones.existefecha('48/15/2020')).toBe(false);
});
test('La fecha es real en calendario (BISIESTO 29)', () => {
    expect(funciones.existefecha('29/02/2020')).toBe(true);
});
test('La fecha NO es real en calendario (BISIESTO 28)', () => {
    expect(funciones.existefecha('29/02/2021')).toBe(false);
});
test('Sin Fecha', () => {
    expect(funciones.existefecha('')).toBe(false);
});

test('Formatear fecha para INSERT', () => {
    expect(funciones.formatFecha('21/10/2020')).toBe('2020-10-21');
});

test('Dia Valido para pagar 15', () => {
    expect(funciones.diasValidosPago('15/10/2020')).toBe(true);
});
test('Dia Valido para pagar 21', () => {
    expect(funciones.diasValidosPago('21/10/2020')).toBe(true);
});
test('Dia NO Valido para pagar 20', () => {
    expect(funciones.diasValidosPago('20/10/2020')).toBe(false);
});
test('Dia NO Valido para pagar 10', () => {
    expect(funciones.diasValidosPago('10/10/2020')).toBe(false);
});