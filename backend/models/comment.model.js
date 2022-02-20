module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define('Comment', {
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pseudo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      idPost: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  
    return Comment;
};
