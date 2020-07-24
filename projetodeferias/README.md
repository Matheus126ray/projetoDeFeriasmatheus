como rodar 

ter mysql instalado

colocar usuário, senha e nome do banco 
nesse arquivo
config/database.js


rode as migrations:
yarn sequelize db:migrate

se precisar apagar 
yarn sequelize db:migrate:undo:all

e para rodar o projeto: 
node index.js
_________________________________

para rodar o quasar
quasar dev
