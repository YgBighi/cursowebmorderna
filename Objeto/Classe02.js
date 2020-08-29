class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { //Herança - Prototipo de Avo
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome) //Chamando a SUPER classe, sendo o prototipo desta classe, o AVO
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)