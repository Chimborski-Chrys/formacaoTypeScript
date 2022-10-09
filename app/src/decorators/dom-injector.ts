export function domInjector(selector: string) {
  return function (target: any, proppertyKey: string) {
    console.log(
      `prototype ${target.constructor.name} adicionando getter ${proppertyKey}`
    );
    let elemento: HTMLElement | null = null;
    const getter = function () {
      if (!elemento) {
        elemento = <HTMLElement>document.querySelector(selector);
        console.log(
          `elemento do DOM seletor ${selector} para injetar em ${proppertyKey}`
        );
      }
      //   const elemento = document.querySelector(selector);
      return elemento;
    };

    Object.defineProperty(target, proppertyKey, { get: getter });
  };
}
