module.exports = (sequelize, DataTypes) => {
    const Receita = sequelize.define('receitas', {
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        ingredientes: DataTypes.STRING,
        mododepreparo: DataTypes.STRING,
        redimento: DataTypes.STRING,
    })

    return Receita;
}