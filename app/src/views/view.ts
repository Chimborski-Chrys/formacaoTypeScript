export abstract class View<T> {
  protected elemento: HTMLElement;
  // private escapar = false;

  // constructor(seletor: string, escapar?: boolean) {
  //   this.elemento = document.querySelector(seletor);
  //   if (escapar) this.escapar = false;
  // }

  constructor(seletor: string) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`Seletor ${seletor} não existe.`);
    }
  }

  // @logaTempoExecucao(true)
  // @inspect
  public update(model: T): void {
    let template = this.template(model);

    this.elemento.innerHTML = template;
  }

  protected template(model: T): string {
    throw new Error("Classe filha preciam implementar o metodo template");
  }
}
