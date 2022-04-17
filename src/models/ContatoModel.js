const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    telefone: { type: String, required: false, default: '' },
    criadoEm: { type: Date, default: Date.now },
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}

Contato.buscaPorId = async function(id) {
    if (typeof id !== 'string') return;
    const contato = await ContatoModel.findById(id);
    return contato;
};

Contato.prototype.register = async function() {
    await this.valida(null);
    if (this.errors.length > 0) return;
    this.contato = await ContatoModel.create(this.body);
};

Contato.prototype.valida = async function(id) {
    this.cleanUp();
    // validação
    await this.verificarNomeCompleto(this.body.nome, this.body.sobrenome, (id !== null)? id: null);
    if (!this.body.nome) this.errors.push('Nome é um campo obrigatório.')

    await this.verificarEmail(this.body.email, (id !== null)? id: null );
    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

    await this.verificarTelefone(this.body.telefone, (id !== null)? id: null);
    if (!this.body.email && !this.body.telefone) {
        this.errors.push('Pelo menos um contato precisa ser enviado: e-mail ou telefone.');
    }
}

Contato.prototype.verificarEmail = async function(email, id) {
    if (id !== null) {
        const contatos = await ContatoModel.find({ email : email }).exec();

        for(contato of contatos) {
            if(!contato._id.equals(id)) {
                this.errors.push('Existe um contato com esse e-mail já cadastrado');
                return;
            }
        }
        return;
    };
    const exists = await ContatoModel.findOne({ email : email }).exec();    
    if (exists !== null) this.errors.push('Existe um contato com esse e-mail já cadastrado');
}

Contato.prototype.verificarTelefone = async function(telefone, id) {
    if (id !== null) {
        const contatos = await ContatoModel.find({ telefone : telefone }).exec();

        for(contato of contatos) {
            if(!contato._id.equals(id)) {
                this.errors.push('Existe um contato com esse telefone já cadastrado');
                return;
            }
        }
        return;
    };
    const exists = await ContatoModel.findOne({ telefone : telefone }).exec();
    if (exists !== null) this.errors.push('Existe um contato com esse telefone já cadastrado');
}

Contato.prototype.verificarNomeCompleto = async function(nome, sobrenome, id) {
    if (id !== null) {
        const contatos = await ContatoModel.find({ nome : nome, sobrenome : sobrenome }).exec();

        for(contato of contatos) {
            if(!contato._id.equals(id)) {
                this.errors.push('Existe um contato com esse nome e sobrenome');
                return;
            }
        }
        return;
    };
    const exists = await ContatoModel.findOne({ nome : nome, sobrenome : sobrenome }).exec();
    if (exists !== null) this.errors.push('Existe um contato com esse nome e sobrenome');
}

Contato.prototype.cleanUp = function() {
    // Limpa os campos
    for(const key in this.body) {
        if(typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }
    
    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone,
    };
};

Contato.prototype.edit = async function(id) {
    if(typeof id !== 'string') return;
    await this.valida(id);
    if(this.errors.length > 0) return;
    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true });
}

// Métodos estáticos
Contato.buscaPorId = async function(id) {
    if (typeof id !== 'string') return;
    const contato = await ContatoModel.findById(id);
    return contato;
};

Contato.buscaContatos = async function(id) {
    const contatos = await ContatoModel.find()
        // Colocando o código 1 fica em ordem crescente e -1 decrescente.
        .sort({ criadoEm: -1 });
    return contatos;
};

Contato.delete = async function(id) {
    if(typeof id !== 'string') return;
    const contato = await ContatoModel.findOneAndDelete({ _id: id });
    return contato;
};

module.exports = Contato;