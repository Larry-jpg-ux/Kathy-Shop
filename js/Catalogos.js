
imgs = document.querySelectorAll("#clothe-show img");
g = document.getElementById("g");
b = document.getElementById("b");

g.onclick = function(){
    // alert("dawdas");
    imgs[0].src = "../img/g1.png";
    imgs[1].src = "../img/g2.png";
    imgs[2].src = "../img/g3.png";
}

b.onclick = function(){
    // alert("dawdas");
    imgs[0].src = "../img/c1.png";
    imgs[1].src = "../img/c2.png";
    imgs[2].src = "../img/c3.png";
}