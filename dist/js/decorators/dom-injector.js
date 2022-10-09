export function domInjector(selector) {
    return function (target, proppertyKey) {
        console.log(`prototype ${target.constructor.name} adicionando getter ${proppertyKey}`);
        let elemento = null;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(selector);
                console.log(`elemento do DOM seletor ${selector} para injetar em ${proppertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, proppertyKey, { get: getter });
    };
}
