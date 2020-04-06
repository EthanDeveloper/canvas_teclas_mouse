let teclas = {
    UP: 38,
    DOWN: 40,
    RIGTH: 39,
    LEFT: 37
}

document.addEventListener("keydown", dibujoLinea);

let cuadrito = document.getElementById("cuadro-lienzo");
let area = cuadrito.getContext("2d");
let x = cuadrito.width/2;    
let y = cuadrito.height/2;
// console.log(y);

cuadrito.addEventListener("mousedown", dibujarMouse);

/* por agregar */
cuadrito.addEventListener("onclick", function(evento3){console.log(evento3)});

function dibujarMouse(evento2) {
    // console.log(evento2)
    x = evento2.offsetX;
    y = evento2.offsetY;
    // console.log(x + " " + y)

    dibujarLinea("red", x--, y--, x++, y++, area);
}

// dibujarLinea("red", x++, y--, x++, y++, area);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 1;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoLinea(evento){
    
    // console.log(evento);

    let colorlinea = "blue";
    let movimiento = 3;

    switch(evento.keyCode){
        case teclas.UP:
            dibujarLinea(colorlinea, x, y, x, y - movimiento, area);
            y = y - movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(colorlinea, x, y, x, y + movimiento, area);
            y = y + movimiento;
            break;
        case teclas.RIGTH:
            dibujarLinea(colorlinea, x, y, x + movimiento, y, area);
            x = x + movimiento;
            break;
        case teclas.LEFT:
            dibujarLinea(colorlinea, x, y, x - movimiento, y, area);
            x = x - movimiento;
            break;
        default:
            console.log("Tecla invalida");
    }

}