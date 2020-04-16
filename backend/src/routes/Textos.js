module.exports = application => {
    application.get('/textos/listar/:_id', (request, response) => application.src.controllers.Textos.getText(application, request, response));
    application.get('/textos/listar', (request, response) => application.src.controllers.Textos.getTexts(application, request, response));
    application.post('/textos/salvar', (request, response) => application.src.controllers.Textos.saveText(application, request, response));
    application.put('/textos/atualizar', (request, response) => application.src.controllers.Textos.updateText(application, request, response));
    application.delete('/textos/remover/:_id', (request, response) => application.src.controllers.Textos.removeText(application, request, response));
}