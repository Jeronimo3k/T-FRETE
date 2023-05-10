import { LightningElement, track } from 'lwc';

export default class FreightCalculator extends LightningElement {
    @track distancia = 0;
    @track quantidade = 0;
    @track tempo = 0;
    @track frete = 0;
    @track tempoEntrega = 0;

    handleDistanceChange(event) {
        this.distancia = event.target.value;
        this.calculateFreight();
    }

    handleQuantityChange(event) {
        this.quantidade = event.target.value;
        this.calculateFreight();
    }

    handleTempoChange(event) {
        this.tempo = event.target.value;
        this.calculateFreight();
    }

calculateFreight() {
  const DISTANCIA_POR_KM = 0.5; // Custo do frete por km
  const DIAS_POR_KM = 0.005; // Tempo de entrega em dias por km

  // Obtém os valores dos campos de entrada do formulário
  const distancia = parseFloat(this.distancia);
  const quantidade = parseInt(this.quantidade);
  const tempo = parseInt(this.tempo);

  // Calcula o frete e o tempo de entrega
  const frete = (distancia * DISTANCIA_POR_KM) + quantidade;
  const tempoEntrega = distancia * DIAS_POR_KM;

  // Define a melhor opção de entrega com base no tempo de entrega
 // let melhorOpcao;
 // if (tempoEntrega <= tempo) {
 //   melhorOpcao = "Normal";
 // } else {
 //   melhorOpcao = "Expresso";
 // }

  // Atualiza os valores dos campos de saída no formulário
  this.frete = frete.toFixed(2);
  this.tempoEntrega = tempoEntrega.toFixed(1);
  this.melhorOpcao = melhorOpcao;
}

}
