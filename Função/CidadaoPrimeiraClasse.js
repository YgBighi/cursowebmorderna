// Função em JS é First-Ckass Object (Citizens)
//High-Order Function 

//Criar de forma Literal
function fun1(){ };

// Armazenar en uma Variável
const fun2 = function (){};

// Armazenar em uma Array
const array = [function (a, b) {return a + b}, fun1, fun2];
console.log(array[0](2 ,3));

// Armazenar em um atributo de Objeto

const obj = {};
obj.falar = function() {return 'Opa'};
console.log(obj.falar());

//Passar Função como paramentro
function run(fun){
    fun();
}
run(function() {console.log('Executando...')});

// Uma Função pode retornar/conter uma Função
function soma(a,b){
    return function(c){
        console.log(a + b +c);
    }
}

soma(2, 3)(4);
const cincoMais = soma(2, 3);
cincoMais(4);