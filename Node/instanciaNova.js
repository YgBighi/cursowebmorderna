// UMA FACTORY RETORNAR UM NOVO OBJETO

module.exports = () =>{
    return{
        valor: 1,
        inc(){
            this.valor++
        }
    }
}