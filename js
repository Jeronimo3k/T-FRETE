import { LightningElement, track } from 'lwc';

const PRECO_POR_KM = 0.5;
const PRECO_POR_ITEM = 2;
const MAX_DISTANCIA = 1000;

export default class calculofrete extends LightningElement {
    @track distancia = 0;
    @track quantidade = 0;
    @track Frete = 0;

    handleDistanceChange(event) {
        this.distancia = parseInt(event.target.value, 10);
        this.calculateFreight();
    }

    handleQuantityChange(event) {
        this.quantidade = parseInt(event.target.value, 10);
        this.calculateFreight();
    }

    calculateFreight() {
        let frete = 0;

        if (this.distancia > 0 && this.quantidade > 0) {
            let distanciaPreco = PRECO_POR_KM * Math.min(this.distancia, MAX_DISTANCIA);
            let itemPreco = PRECO_POR_ITEM * this.quantidade;

            frete = distanciaPreco + itemPreco;
        }

        this.frete = freight;
    }
}
