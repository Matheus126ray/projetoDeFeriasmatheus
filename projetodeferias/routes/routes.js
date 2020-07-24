module.exports = function (app) {

  app.get("/", (req, res) => {
    res.send("Receitas Versão 1.0.0");
  });

  var receitaController = require('../controllers/receitaController')

  app.route('/receita')
  .get(receitaController.findAll)
  .post(receitaController.create)

  app.route('/receita/:id')
  .get(receitaController.findByPk)
  .put(receitaController.update)
  .delete(receitaController.delete);
};
