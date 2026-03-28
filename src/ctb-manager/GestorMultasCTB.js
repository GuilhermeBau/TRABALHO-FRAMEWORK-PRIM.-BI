class GestorMultasCTB {
  constructor() {
    this.tabelaValores = {
      leve: 88.38,
      media: 130.16,
      grave: 195.23,
      gravissima: 293.47
    };
  }

  calcularCustoTotal(multas) {
    if (!Array.isArray(multas)) {
      throw new Error("Erro: O parâmetro deve ser uma lista (array) de multas.");
    }
    
    return multas.reduce((total, multa) => {
      const valor = this.tabelaValores[multa.gravidade.toLowerCase()];
      return total + (valor || 0);
    }, 0);
  }

  verificarRiscoSuspensao(pontosAtuais, qtdGravissimas) {
    let limitePontos = 40;

    if (qtdGravissimas === 1) limitePontos = 30;
    if (qtdGravissimas >= 2) limitePontos = 20;

    const temRisco = pontosAtuais >= limitePontos;

    return {
      risco: temRisco,
      limitePermitido: limitePontos,
      pontosAtuais: pontosAtuais,
      mensagem: temRisco 
        ? "ALERTA CRÍTICO: CNH sujeita a suspensão!" 
        : "Situação regular. CNH ativa."
    };
  }

  formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  }
}

export default GestorMultasCTB;