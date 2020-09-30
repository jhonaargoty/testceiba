"use strict";

exports.existefecha = function (fecha) {
  if (trim(fecha) === "" || trim(fecha).length != 10) return false;
  var fecha = fecha.split("/");
  var dia = fecha[0];
  var mes = fecha[1];
  var anio = fecha[2];
  // Año
  if (isNaN(anio) || anio < 1900) return false;
  // Mes
  if (isNaN(mes) || mes < 1 || mes > 12) return false;
  // Día
  if (isNaN(dia) || dia < 1 || dia > 31) return false;
  else {
    if (dia == 31 && (mes == 4 || mes == 6 || mes == 9 || mes == 11))
      return false;
    if (dia == 31 && (mes != 4 || mes != 6 || mes != 9 || mes != 11))
      return true;
    var diaMax = 31;
    if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) diaMax = 29;
    else diaMax = 28;
    if (dia > diaMax) return false;
  }
  return true;
};
// -----------------------
// Elimina espacios al principio y fin de la fecha
function trim(fecha) {
  fecha += "";
  fecha = fecha.replace(/^\s+/, "");
  return fecha.replace(/\s+$/, "");
}

exports.formatFecha = function (fecha) {
  var fecha = fecha.split("/");
  var dia = fecha[0];
  var mes = fecha[1];
  var anio = fecha[2];

  return anio + "-" + mes + "-" + dia;
};

exports.diasValidosPago = function (fecha) {
  var fecha = fecha.split("/");
  var dia = fecha[0];
  if (dia % 2 == 0) {
    return false;
  } else {
    return true;
  }
};
