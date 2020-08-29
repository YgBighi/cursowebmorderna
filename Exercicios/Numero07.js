function FormulaBhaskara(a, b, c){
    delta = b*b - 4*a*c

    if(delta<0){
        console.log('Delta Negativo')
    }else{
    x1 = (-b + Math.sqrt(delta))/2*a
    console.log(`X1 = ${x1}`)

    x2 = ( -b - Math.sqrt(delta))/2*a
    console.log(`X2 = ${x2}`)

    }
}

FormulaBhaskara(3, -5, 12)
FormulaBhaskara(1 ,6 , 5)