const objeto = {
    nivel1a:{
        nivel2a:{
            nivel3a:"aaaa3"
        }
    },
    nivel1b:"bbbb1"
}
/* let a = Object.entries(objeto)
console.log(a[0][0])
console.log(a[0][1])
console.log(typeof a[0][1]) */
function buscar(obj){
    let valor;
    let objeto;
    let temp;
    temp = Object.entries(obj)
    if(typeof temp[0][1] == "string"){
        objeto = obj
        valor = temp[0][1]
        return valor
    }
    return buscar(temp[0][1])
}
console.log( buscar(objeto) )
