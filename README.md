# node-api
API desenvolvida em node, utilizando o docker e mongodb do curso starter de NodeJs da RocketSeat

### Começando instalações necessárias.

Iniciando projeto, dentro da pasta do projeto no cmd digite o comando.

```
npm init -y
```

Express para trabalhar com as rotas.

```
npm install express
```


Usando o **docker** para trabalhar com o mongodb, baixe para seu computador aqui -> [docker](https://docs.docker.com)


Verificando se instalação foi bem sucedida, no terminal digite **docker** se retornar várias coisas ocorreu tudo bem.


Baixando a máquina (container) virtual mongodb

```
docker pull mongo
```


Subindo a máquina redirecionando portas

```
docker run --name mongodb -p 27017:27017 -d mongo
```


Verificar se está iniciada

**docker ps**


Testando no navegador

**localhost:27017** ou o ip docker


Utilizando o **robo3t** para verificar os dados dos produtos salvos no mongodb

Download: [robo3t](https://robomongo.org/)

**Utilizando:** Clique em **create** para criar uma conexão, deixe **localhost e porta padrão 27017, se não funcionar com localhost coloque o ip do docker**, dê um **nome**, aperte em **save** e **connect**.


Utilizando o mongoose como dependência de produção.

```
npm install mongoose
```
**Mongoose é um orm de banco não relacionais em mongodb. relação de tranformar as tabelas em objetos JavaScript**


Usando o require-dir para obter o arquivos de todo o diretório.

```
npm install require-dir
```

Utilizando o **mongoose-paginate** para trabalhar com paginação.

```
npm install mongoose-paginate
```


Utilizando o **cors** para a aplicação poder ser acessada por outros domínios

```
npm install cors
```
