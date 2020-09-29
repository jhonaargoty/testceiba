const express = require("express");
const router = express.Router();
const arrendamientos = require("../controllers/arrendamiento.controller")

router.get("/api/pagos", arrendamientos.allPagos);

router.post("/api/pagos/", arrendamientos.addPago);

module.exports = router;
