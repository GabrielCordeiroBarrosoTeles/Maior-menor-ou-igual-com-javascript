function imprimir(){
    var resultado
    var v1=Number(document.getElementById('v1').value)
    var v2=Number(document.getElementById('v2').value)
    if(v1>v2){  
        resultado =`Valor 1 que é (${v1}), é maior que valor 2 (${v2})`
    }else if(v1<v2){
        resultado=`Valor 1 que é (${v1}), é menor que valor 2 (${v2})`
    }else if(v1==v2){
        resultado=`Valor 1 que é (${v1}), é igual a valor 2 que é (${v2}) também`
    }
    document.getElementById('resultado').value=resultado
}