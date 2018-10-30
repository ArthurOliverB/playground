class Animal {
    constructor(nome, filo) {
        this.nome = nome
        this.filo = filo
    }
    apresentar() {
        console.log(`Nome: ${this.nome}\nFilo: ${this.filo}`);
    }
}

    
let cachorro = new Animal("Cachorro", "Cordados");
cachorro.apresentar()