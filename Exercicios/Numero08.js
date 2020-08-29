let pontuacao = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function Progressao(pontuacao){
    let pontos = pontuacao.split(", ")
    let Recorde = 0
    let PiorPOnto = 1
    let MaiorPonto = pontos[0]
    let MenorPonto = pontos[0]

    for(let i = 1; i<pontos.lenght;i++){

        if(pontos[i]> MaiorPonto){
            MaiorPonto = pontos[i]
            Recorde++
        }else if(pontos[i]<MenorPonto){
            MenorPonto = pontos[i]
            PiorPOnto = i+1
        }
    }

    return [Recorde, PiorPOnto]
}

console.log(Progressao(pontuacao))
