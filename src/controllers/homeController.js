exports.paginaInicial = (req, res) => {
    // O objeto é adicionado à sessão do navegador e ficará salvo pela período determinado
    // req.session.usuario = { nome: 'Wesley', logado:true };

    // Salva a mensagem para ser exibida uma única vez
    //req.flash('info', 'Teste mensagem');

    // Mostra a mensagem
    console.log(req.flash('info'));

    console.log(req.session.usuario);
    res.render('index', {
        titulo: 'Este será o título da página',
        numeros: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    });
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.csrfToken());
}