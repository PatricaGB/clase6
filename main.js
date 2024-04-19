let numeros=[8,10,45,2,33,90,50,11,6,26];
console.log(numeros);

function burbuja(arreglo){
    let orden=false;
    for (let i = 0; i<arreglo.length;i++){
        orden=true;
        for (let j=0;j<arreglo.length-i-1;j++){
            if(arreglo[j]>arreglo[j+1]){
                const valor=arreglo[j+1];
                arreglo[j+1]=arreglo[j];
                arreglo[j]=valor
                orden=false;
            }
        }
    }
    return arreglo;
}

let EnOrden=burbuja(numeros);
console.log("resultado de Ordenamiento burbuja = "+EnOrden);

function seleccion(arreglo) {
    for(let i=0;i<arreglo.length;i++){
        minimo=arreglo[i];
        ind=i;
        for(let j=i+1;j<arreglo.length;j++){
            if(minimo>arreglo[j]){
                minimo=arreglo[j];
                ind=j;
            }
        }
        if(ind!==i){
            valor=arreglo[i];
            arreglo[i]=arreglo[ind];
            arreglo[ind]=valor;
        }
    }
    return arreglo;
}
let EnOrden2=seleccion(numeros);
console.log("resultado de Ordenamiento por Seleccion = "+EnOrden2);

function Insercion(arreglo){
    for (let i = 1; i<arreglo.length;i++){
        const valor=arreglo[i];
        let j = i-1;
        for(j; j>=0 && arreglo[j]>valor;j--){
            arreglo[j+1]=arreglo[j];
            j=j-1;
        }
        arreglo[j+1]=arreglo[i];
    }
    return arreglo;
}
let EnOrden3=Insercion(numeros);
console.log("resultado de Ordenamiento por Insercion = "+EnOrden3);