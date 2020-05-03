function triangulo(lado1, lado2, lado3) {
    let type;
    if(lado1 == lado2 && lado2 == lado3){
        type = 'Equilátero'
    }    
    else if(lado1==lado2||lado1==lado3||lado2==lado3){
        type = 'Isósceles'
    }
    else if(lado1!=lado2&&lado1!=lado3&&lado2!=lado3){
        type = 'Escaleno'
    }
    return type
}
console.log(triangulo(4,8,4))
