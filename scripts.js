let numpantalla="0";
let pantallaconnumero="si";
let usarpunto="no";
let numespera=0;
let operacionpendiente="";
let solucion="";

function numIngreso(x) {
    if(x!=".");
        if(numpantalla=="0" || pantallaconnumero=="si"){
            document.getElementById("operacion").value=x;
            numpantalla=x;
        }
            else if(x!="."){
                document.getElementById("operacion").value+=x;
                numpantalla+=x;
        }

if(x=="." && usarpunto=="no" && numpantalla=="0"){
    document.getElementById("operacion").value="0.";
    numpantalla=x;
    usarpunto="si";
}

else if(x=="." && usarpunto=="no"){
    document.getElementById("operacion").value +=x;
    numpantalla +=x;
    usarpunto="si";
}
else if(x=="." && usarpunto=="si"){

}
pantallaconnumero="no";
}
function Ingresaoperador(y) {
    if(operacionpendiente==""){
        numespera=document.getElementById("operacion").value;        ;
        document.getElementById("operacion").value+=y;
        operacionpendiente=y;
        pantallaconnumero = "no";
        numpantalla="";
        usarpunto="no";
    }
}

function resultadofinal(){
    if(operacionpendiente != ""){
        solucion=numespera+operacionpendiente+numpantalla;
        document.getElementById("operacion").value=eval(solucion);
        numpantalla=eval(solucion);
        pantallaconnumero="si";
        operacionpendiente="";
        usarpunto="no";
    }
}

function raiz(){
    if(operacionpendiente==""){
        document.getElementById("operacion").value=Math.sqrt(numpantalla);
        pantallaconnumero="no";
        operacionpendiente="";
        usarpunto="no";
    }
}
function limpiar()
{
    numpantalla="0";
    pantallaconnumero="si";
    usarpunto="no"; 
    numespera=0;
    operapendiente="";
    solucion="";
document.getElementById("operacion").value="0";
}
