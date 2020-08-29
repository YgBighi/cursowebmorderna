/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function dia(dia){

    switch(dia){
        case 1:
            console.log('Domingo, fim de semana')
            break
        case 2:
            console.log('Segunda-Feira, dia útil')
            break
        case 3:
            console.log('Terça-Feira, dia útil') 
            break
        case 4:
            console.log('Quarta-Feira, dia útil')
            break
        case 5:
            console.log('Quinta-Feira, dia útil')
            break
        case 6:
            console.log('Sexta-Feira, dia útil')
            break
        case 7:
            console.log('Sábado, Fim de Semana')
            break
        default:
            console.log("Dia Invalido!")
            break
    }
}

dia(1)
dia(2)
dia(3)
dia(4)
dia(5)
dia(6)
dia(7)
dia(8)
