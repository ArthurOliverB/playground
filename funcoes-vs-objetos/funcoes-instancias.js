function Animal(nome, filo) {
    this.nome = nome
    this.filo = filo
    
    this.apresentar = function() {
        console.log(`Nome: ${this.nome}\nFilo: ${this.filo}`);
    }
}

let cachorro = new Animal("Cachorro", "Cordados");
cachorro.apresentar()