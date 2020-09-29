const funciones = require("../functions/functions");
const mysqlConnection = require("../models/database");

exports.allPagos = (req, res) => {
  mysqlConnection.query("SELECT * from pagos", function (err, result) {
    if (err) throw err;
    res.json(result);
    return res.status(200).send({});
  });
};
exports.addPago = (req, res) => {
  const {
    documentoIdentificacionArrendatario,
    codigoInmueble,
    valorPagado,
    fechaPago,
  } = req.body;

  var diasValidosPago = funciones.diasValidosPago(fechaPago);

  if (!diasValidosPago) {
    return res.status(400).send({
      respuesta:
        "lo siento pero no se puede recibir el pago por decreto de administración",
    });
  }

  var fecha = funciones.existefecha(fechaPago);
  if (!fecha) {
    return res.status(400).send({
      respuesta: "FECHA INVALIDA",
    });
  }
  if (fecha && diasValidosPago) {
    var fechaPagoFormat = funciones.formatFecha(fechaPago);
    var sql =
      "INSERT INTO pagos (documentoIdentificacionArrendatario, codigoInmueble, valorPagado, fechaPago) VALUES (?)";
    var values = [
      documentoIdentificacionArrendatario,
      codigoInmueble,
      valorPagado,
      fechaPagoFormat,
    ];

    mysqlConnection.query(sql, [values], function (err, result) {
      if (err) throw err;
      if (valorPagado == 1000000) {
        return res.status(200).send({
          respuesta: "gracias por pagar todo tu arriendo",
        });
      }
      if (valorPagado <= 1000000) {
        var valorFaltante = 1000000 - valorPagado;
        return res.status(200).send({
          respuesta:
            "gracias por tu abono, sin embargo recuerda que te hace falta pagar $" +
            valorFaltante,
        });
      }
    });
  }
};
