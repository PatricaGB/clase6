class Nodo{
    constructor(valor){
        this.valor=valor;
        this.adyacentes=[];
        this.valoresAristas=[];
    }
}

class Grafo{
    constructor(){
      this.nodos=[];  
    }
    agregarNodo(valor){
        let nodo=new Nodo(valor);
        this.nodos.push(nodo);
    }

    agregarArista(valor1,valor2,valorArista){
        let nodo1=this.buscarNodo(valor1);
        let nodo2=this.buscarNodo(valor2);
        nodo1.adyacentes.push(nodo2);
        nodo2.adyacentes.push(nodo1);
        nodo1.valoresAristas.push(valorArista);
        nodo2.valoresAristas.push(valorArista);
    }

    buscarNodo(valor){
    for(let i=0;i<this.nodos.length;i++){
        if(this.nodos[i].valor==valor){
            return this.nodos[i];
            }
        } 
        return null;  
    }
    buscarArista(valor1,valor2){
        let nodo1=this.buscarNodo(valor1);
        //let nodo2=this.buscarNodo(valor2); no es necesaria la linea
        for(let i=0;i<nodo1.adyacentes.length;i++){
            if(nodo1.adyacentes[i].valor==valor2){
                return nodo1.valoresAristas[i];
            }
        }
        return null;
    }

}
let grafo=new Grafo();
grafo.agregarNodo("A");
grafo.agregarNodo("B");
grafo.agregarNodo("C");
grafo.agregarNodo("D");
grafo.agregarNodo("E");
grafo.agregarArista("A","B",69);
grafo.agregarArista("A","C",50);
grafo.agregarArista("A","D",85);
grafo.agregarArista("A","E",100);
grafo.agregarArista("C","B",72);
grafo.agregarArista("C","D",60);
grafo.agregarArista("E","B",90);


if(grafo.buscarArista("B","E")!=null){
    console.log("Existente");
    console.log("el valor de la arista es: "+grafo.buscarArista("B","E"));
}
else{
    console.log("No Existente")
}