module.exports = application => {
    application.post('/login' , (request, response) => application.src.controllers.Administracao.getLogin(application, request, response));
    application.get('/usuarios/listar/:_id', (request, response) => application.src.controllers.Administracao.getUser(application, request, response));
    application.get('/usuarios/listar', (request, response) => application.src.controllers.Administracao.getUsers(application, request, response));
    application.post('/usuarios/salvar', (request, response) => application.src.controllers.Administracao.saveUser(application, request, response));
    application.put('/usuarios/atualizar', (request, response) => application.src.controllers.Administracao.updateUser(application, request, response));
    application.delete('/usuarios/remover/:_id', (request, response) => application.src.controllers.Administracao.removeUser(application, request, response));
}