

const btnCalcular = document.getElementById('calcular');

btnCalcular.onclick = function (){
    const cantidad = document.getElementById('cantidad').value;
    const color = document.getElementById('optColor').value;

    if (cantidad >= 1 && color !=0){
        document.getElementById('total').innerText=`Total: $${cantidad*400000}`;
        document.getElementById('cant').innerText=`Cantidad: ${cantidad}`;
        
        switch (color){
            case "IndianRed":
                document.getElementById('colores').style.backgroundColor='IndianRed';
            break;
            case "DarkKhaki":
                document.getElementById('colores').style.backgroundColor='DarkKhaki';
            break;
            case "SlateBlue":
                document.getElementById('colores').style.backgroundColor='SlateBlue';
            break;
        }
    } else {
        alert("danger");
    }
}

