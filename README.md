# NodeAPI + Sequelize
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/neliocursos/exemplo-readme/blob/main/LICENSE) 

# Sobre o projeto
A proposta do projeto é uma aplicação que faz a ponte entre o Front End de uma aplicação em React Native e um banco de dados em MySQL.</br>
A comunicação da aplicação com o banco de dados é feita através do Sequelize. Ao ativar o submit no App em React Native, os dados são enviados via POST para esta API que os processa e envia para o banco através da função "create" do Sequelize. No restante das funções do CRUD, irá funcionar da mesma forma.

# Tecnologias utilizadas
- NodeJS
- Nodemon
- ExpressJS
- Sequelize
- Cors
- Body Parser


# Como executar o projeto
### **Dependências necessárias:** Express, Nodemon, Body Parser, Cors e Sequelize. </br>
**As libs acima podem ser instaladas utilizando:**

```bash
npm install nome_do_pacote
```
Para prosseguirmos, primeiramente você deverá clonar o repositório em sua máquina:

```bash
# clonar repositório
git clone https://github.com/pabloalvesdev/ApiNode-Sequelize.git

# entrar na pasta do projeto
cd ApiNode-Sequelize

## abra com o seu editor de textos, no meu caso é o vscode...
code ./app/models/db.js
```
Ao abrir o arquivo "db.js" com o seu editor de textos, procure altere as seguintes linhas:

```js
const banco = new Sequelize('nome_do_banco', 'usuario', 'senha', {
    host: 'url_do_seu_server',
    dialect: 'mysql' //esta é a referência em que o sequelize terá de trabalhar, o banco que utilizei para rodar este projeto foi MySQL, portanto no meu caso é mysql, mas poderia ser 'sqlite', 'postgres', 'mariadb' ou 'mssql'
})
```

Feitas estas configurações iniciais basta rodar a aplicação:

```bash
# entrar na pasta do projeto
cd ApiNode-Sequelize

# executar o projeto
npx nodemon
```

# Autor

Pablo Alves

https://www.linkedin.com/in/pablo-alves-a40056203/
