import validator from 'validator';
import Alerta from './Alerta';

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
        this.errors = [];
    }

    init() {
        this.events();
    }

    events() {
        this.validateInputs();
        if(!this.form) return;
        this.form.addEventListener('submit', event => {
            event.preventDefault();
            this.validate(event);
        })
    }

    validate(e) {
        const element = e.target;
        const emailContato = element.querySelector('input[name="email"]');
        const telefoneContato = element.querySelector('input[name="telefone"]');

        if (!this.errors.length > 0) element.submit();
    }

    validateInputs() {
        // Identificar inputs
        const nome = document.querySelector('.input-nome');
        const sobrenome = document.querySelector('.input-sobrenome');
        const telefone = document.querySelector('.input-telefone');
        const email = document.querySelector('.input-email');

        if(!nome) return;
        nome.addEventListener('focusout', event => {
            //Validar nome
            this.validarNome(nome);
        })

        if(!sobrenome) return;
        sobrenome.addEventListener('focusout', event => {
            //validar sobrenome
            this.validarSobrenome(sobrenome);
        })

        if(!telefone) return;
        telefone.addEventListener('focusout', event => {
            // Validar telefone
            this.validarTelefone(telefone);
        })

        if(!email) return;
        email.addEventListener('focusout', event => {
            // Validar email
            this.validarEmail(email);
        })
    };

    validarNome(nome) {
        if(!nome) return;
        console.log(nome.value);
    }

    validarSobrenome(sobrenome) {
        if(!sobrenome) return;
        console.log(sobrenome.value);
    }

    validarTelefone(telefone) {
        if(!telefone) return;
        console.log(telefone.value);
    }

    validarEmail(email) {
        if(!email) return;
        const alerta = new Alerta('.form-input-email','Email inválido');
        
        if(!validator.isEmail(email.value)) {
            alerta.inserirAlerta(this.errors);
        } else {
            alerta.removerAlerta(this.errors);
        }
    }

}