//Definindo um schema = quais campos um produto pode ter e o que deve ser mostrado
//importando o mongoose
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

//definindo a variavel ProductSchema
const ProductSchema = new  mongoose.Schema({
//passando objeto, os campos do produto.
   title: {
       type: String,
       required:  true,
   },
   description: {
       type: String,
       required: true,
   },
   url: {
    type: String,
    required: true,
   },
   //salva a data de criação de cada produto automaticamente
   createdAt: {
       type: Date,
       default: Date.now,
   },
});

ProductSchema.plugin(mongoosePaginate);

//registrando um model na aplicação
mongoose.model("Product", ProductSchema);