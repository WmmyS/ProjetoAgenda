export default class Mascara {
  constructor(telefone){
      this.telefone = telefone;
  }

  aplicar() {
    const valor = document.querySelector(this.telefone).attributes[0].ownerElement['value'];
    let retorno = valor.replace(/\D/g, "");
    retorno = retorno.replace(/^0/, "");

    if (retorno.length > 11) {
      retorno = retorno.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (retorno.length > 7) {
      retorno = retorno.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3");
    } else if (retorno.length > 2) {
      retorno = retorno.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else if (valor.trim() !== "") {
      retorno = retorno.replace(/^(\d*)/, "($1");
    }
    
    document.querySelector(this.telefone).attributes[0].ownerElement['value'] = retorno;
  }
}