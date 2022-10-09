import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {
  private _negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  public lista(): ReadonlyArray<Negociacao> {
    return this._negociacoes;
  }

  public paraTexto(): string {
    return JSON.stringify(this._negociacoes, null, 2);
  }

  public ehIgual(negociacoes: Negociacoes): boolean {
    return (
      JSON.stringify(this._negociacoes) === JSON.stringify(negociacoes.lista())
    );
  }
}
