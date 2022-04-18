# **Agenda de Contatos Online**

<p align="justify">Este é um projeto didático de uma agenda online utilizando o padrão MVC.
<p align="justify">O projeto é um material de estudo do curso: https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/.
  
## **Base de dados**

<p align="justify">*A base utilizada é uma base online noSQL o MongoDB.*

## Para geração do servidor foi utilizado Node com a biblioteca Express:

### Bibliotecas no ambiente de desenvolvimento:
  * Babel CLI
  * Babel Core
  * Babel preset-env
  * Babel loader
  * NodeMon
  * WebPack
  * Webpack-CLI
  
### Bibliotecas no ambiente de produção:
  * Bscryptsjs
  * Copnnect Flash
  * Connect Mongo
  * Core-js
  * Css-loader
  * Csurf
  * DotEnv
  * Ejs
  * Express-session
  * Helmet
  * Mongoose
  * Regenerator-runtime
  * Style-loader
  * Validator

### Preparando o ambiente:

Após clonar o projeto instale as dependências:
  
  ``` npm install ```
  
Gerar os arquivos bundle com o webpack com o comando:

``` npm run dev ```
  
A aplicção deverá ser conectava em um servidor mongoDB da seguinte forma:
  
  Crie um arquivo .ENV com a variável CONNECTIONSTRING= <string de conexão com mongoDB>

Iniciar a aplicação com o comando:

``` npm start ```
  
## **Existe uma aplicação em execução pelo servidor Heroku pelo link:
  
  https://agenda-simple-application.herokuapp.com/
  

