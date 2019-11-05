// importando
const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
    //listagem dos produtos / mostra todos os resultados.
    async index(req, res){
       //percorre e mostra até encontrar algo
       const { page = 1 } = req.query;
       const products = await Product.paginate({}, {page, limit: 3});
       
       //retornando em formato de json os produtos do banco de dados
       return res.json(products);
    },

    //definindo rota de detalhes
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },
    
    //definindo novo método de criação
    async store(req, res) {
        //criação dos produtos
       const product = await Product.create(req.body);
       //retornando o produto criado na base de dados
       return res.json(product);
    },

    //definindo rota de update de produto
    async update(req, res) {
        //unindo produto com a atualizações vindas do body. new: true = retorna atualizado sempre
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true // retorna o produto atualizado.
        });

        return res.json(product);
    },

    //definindo rota de remoção do produto
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        
        //retornando resposta de sucesso sem nenhum conteúdo
        return res.send("Excluído com sucesso.");
    }
    
};

//(req, res) = {
    //testando e criando um produto fake
    // Product.create({
      //   title: "React-Native",
      //   description: "O melhor para mobile",
      //   url: "https://github.com/facebook/react-native"
     //});
 
    // return res.send("Servidor executado");
 //});