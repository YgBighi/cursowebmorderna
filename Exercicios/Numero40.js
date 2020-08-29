/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.
*/

function ConceitoNotas(vetor){
    for(let i = 0; i<vetor.length;i++){
        if(vetor[i]>=0 && vetor[i]<=4.9){
            console.log(`Nota ${i+1}: ${vetor[i].toFixed(2).replace('.', ',')} - Conceito D`)
        }else if(vetor[i]>4.9 && vetor[i]<=6.9){
            console.log(`Nota ${i+1}: ${vetor[i].toFixed(2).replace('.', ',')} - Conceito C`)
        }else if(vetor[i]>6.9 && vetor[i]<=8.9){
            console.log(`Nota ${i+1}: ${vetor[i].toFixed(2).replace('.', ',')} - Conceito B`)
        }else if(vetor[i]>8.9 && vetor[i]<=10){
            console.log(`Nota ${i+1}: ${vetor[i].toFixed(2).replace('.', ',')} - Conceito A`)
        }
    }
}

const Notas = [1.1, 6, 8, 9]

ConceitoNotas(Notas)