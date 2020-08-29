/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

function Divisivel3(num){
    if(num%3 == 0){
        return true
    }else{
        return false
    }
}

console.log(Divisivel3(5))
console.log(Divisivel3(6))
console.log(Divisivel3(8))
console.log(Divisivel3(33))