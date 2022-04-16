export default class Alerta {
    constructor(classe, mensagem) {
        this.classe = classe;
        this.mensagem = mensagem;
    }
    
    inserirAlerta(errors) {
        if(!this.classe || !this.mensagem) return;
        const div = document.querySelector(this.classe);
        this.inserirDivAlerta(div);

        // Insere mensagens de erro em array caso o erro ainda não tenha sido inserido
        let finded = errors.map(data => data === this.mensagem);
        if(!finded.length > 0) errors.push(this.mensagem);
    }

    // Responsável por inserir as divs com mensagens de alerta
    inserirDivAlerta(div) {
        const idName = `${this.classe}-alert`.replace('.','');
        const d = document.getElementById(idName);

        if(!d) {
            const divAlerta = document.createElement('div');
            const text = document.createTextNode(this.mensagem);
            divAlerta.classList.add('alert');
            divAlerta.classList.add('alert-danger');
            divAlerta.classList.add('my-2');
            divAlerta.setAttribute('id', idName);
            divAlerta.appendChild(text);
            div.appendChild(divAlerta);
        };
    }

    // Responsável por remover a div com mensagens de alerta
    removerAlerta(errors) {
        const idName = `${this.classe}-alert`.replace('.','');
        const div = document.querySelector(this.classe);
        const divRemover = document.getElementById(idName);
        if (divRemover) div.removeChild(divRemover);

        // Remove a mensagem de erro do array
        errors.filter(data => errors.pop(data === this.mensagem));
    }
}