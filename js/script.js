
// Con estas sentencias se localiza y se manpulan los componentes html pero desde el javascript
shirt = document.querySelector('.shirt img');
short = document.querySelector('.short img');
btn_back = document.getElementById('btn_back');
btn_next = document.getElementById('btn_next');
price = document.getElementById('price');

// x es usado como valor bandera; 1 = puesto    2 = quitado; al igual la y. pero x hace referencia a camisa y y a pantalon
var x = 0;

btn_back.onclick = function(){
    // alert("awdasd");
    if(x == 0){
        shirt.style.left = "-405px";
        shirt.style.top = "-11px";
        quitaFondo(shirt);

        price.style.display = "block";

        //si el pantalon esta puesto el valor en total es 300 sino pues solamente la camisa vale 100 cordobas
        if(y==1)
            price.innerText = "c$ 300";
        else
            price.innerText = "c$ 100";
        x = 1;
    }else{
        shirt.style.top = "unset";
        shirt.style.left = "0px";
        shirt.style.backgroundColor = "#8c898985";
        shirt.style.boxShadow =  "0px 0px 10px #8c898985";

        //si no se ha quitado el pantalon entonces se queda mostrado en pantalla
        if(y==1){
            //select price from producto where e
            price.innerText = "c$ 200";
        }else
            price.style.display = "none";
        ponerFondo(shirt);
        x = 0;
    }
}

function quitaFondo(a){
    a.style.backgroundColor = "unset";
    a.style.boxShadow =  "unset";
}
function ponerFondo(a){
    a.style.backgroundColor = "#8c898985";
     a.style.boxShadow =  "0px 0px 10px #8c898985";
}

var y = 0;
btn_next.onclick = function(){

    if (y==0) {
        short.style.left = "-481px";
        short.style.top = "-78px";
        short.style.height =  "360px";
        quitaFondo(short);

        price.style.display = "block";

        //si la camisa (x) no se a seleccionado entonces price mostrara el valor de 200, si x esta seleccionado entonces hacen 
        //un total de 300 porque como ejemplar el pantalon vale 200 + 100 de camisa hacen 300
        if(x == 0)
            price.innerText = "c$ 200";
        else
            price.innerText = "c$ 300";
        y=1;
    }else{
        short.style.left = "unset";
        short.style.right = "0px";
        short.style.top = "-40px"
        short.style.height =  "295px"

        // si no se ha quitado x entonces se queda el valor de la camisa en pantalla
        if(x==1){
            price.innerText = "c$ 100";
        }else{
            price.style.display = "none";
        }
        ponerFondo(short);
        y=0;
    }
    
    
}