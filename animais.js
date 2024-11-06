
function Animal(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.comer = function() {
        console.log(this.nome + " está comendo")
    }
}

function tipoDeAnimais(nome, idade, raca, habitat) {
    Animal.call(this, nome, idade);

    this.raca = raca;
    this.habitat = habitat;
    this.exibirInfo = function() {
        console.log(`${this.nome} é da raça ${this.raca} e vive no habitat ${this.habitat}`);
    }
}

function Cachorro(nome, idade, raca, habitat, cor) {
    tipoDeAnimais.call(this, nome, idade, raca, habitat);

    this.cor = cor;
    this.latir = function() {
        console.log(this.nome + " está latindo: Au au!");
    }
}

function Gato(nome, idade, raca, habitat, cor) {
    tipoDeAnimais.call(this, nome, idade, raca, habitat);

    this.cor = cor;
    this.miar = function() {
        console.log(this.nome + " está miando: Miau!");
    }
}

const animal1 = new Cachorro('Bud', 10, 'Golden Retrivier', 'Casa', 'Amarelo');
const animal2 = new Gato('Morgana', 5, 'Persa', 'Casa', 'Cinza');
const animal3 = new Cachorro('Rex', 8, 'Labrador', 'Casa', 'Amarelo')


animal1.comer();     
animal1.exibirInfo();   
animal1.latir(); 

animal2.comer();     
animal2.exibirInfo();   
animal2.miar(); 

animal3.comer();     
animal3.exibirInfo();   
animal3.latir(); 