function imprimir(){
    var resultado
    var v1=Number(document.getElementById('v1').value)
    var v2=Number(document.getElementById('v2').value)
    if(v1>v2){  
        resultado =`${v1} é maior que ${v2}`
    }else if(v1<v2){
        resultado=`${v1} é menor que ${v2}`
    }else if(v1==v2){
        resultado=`${v1} é igual a ${v2}`
    }
    document.getElementById('resultado').value=resultado
}
