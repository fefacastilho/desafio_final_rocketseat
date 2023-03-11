const AppError = require("../utils/Apperror");

class UsersController {

  /*no max 5 funçoes
  index - Get para listar varios registros
  show - get para exibir registro expecifico
  create - post para criar o registro
  update - put para atualizar o registro
  dele - delete para remover o registro*/

  create( request, response){
    const {name, email, password} = request.body;

    if (!name) {
        throw new AppError("Nome é obrigatório");
    }

    response.json(`usuarios: ${name}, email ${email}, ${password}`);
  }
}

module.exports = UsersController