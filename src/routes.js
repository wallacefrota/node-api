const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");
//definindo rotas
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

//exportando as rotas
 module.exports = routes;
