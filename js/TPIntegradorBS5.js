

function calcularPrecioFinal() {
    // lo coloco para ver si ingresó a la función
    console.log("ingreso a calcularPrecioFinal");

    // en cantEnt almaceno la cantidad de entradas que ingreso el usuario
    let cantEnt=document.getElementById("cantEntradas").value;  
    console.log("cantEnt:" + cantEnt);
    
    // en desc almaceno el tipo de usuario y el descuento que elijió el usuario
    let desc=document.getElementById("porcDescuento").value;
    console.log("desc:" + desc);

    // obtento el descuento que hay que realizar
    let descTotal= (cantEnt*200) * desc/100;
    //10 *1000 * 10/ 100=1000
    console.log("descTotal" + descTotal);

    // resto el descuento total del precio total
    let precioFin=(cantEnt*200) - descTotal;
    console.log("precioFin:" + precioFin);


    // coloco en el html el valor de las entradas - el descuento
    document.getElementById("precioFinal").value=`Total a pagar: $ ${precioFin}`;
    //document.getElementById("precioFinal2").innerHTML=precioFin;
    //document.getElementById("precioFinal2").style.display="none";

    return precioFin
}

function limpiarInput() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cantEntradas").value = "";
    document.getElementById("precioFinal").value = "";
    
    // document.getElementsByTagName("input").value = "";
}
/*
id="nombre"
id="apellido"
id="email"
id="cantEntradas"
id="porcDescuento"
id="precioFinal"
*/


function resumen() {
    let nombreGet = document.getElementById("nombre").value;
    document.getElementById("nombreMod").innerHTML=`Nombre: ${nombreGet}`; 
    let apellidoGet = document.getElementById("apellido").value;
    document.getElementById("apellidoMod").innerHTML = `Apellido: ${apellidoGet}`;
    let emailGet = document.getElementById("email").value;
    console.log("email :" + emailGet);
    document.getElementById("emailMod").innerHTML = `Email: ${emailGet}`;
    let cantEnt=document.getElementById("cantEntradas").value; 
    document.getElementById("cantidadMod").innerHTML = `Total de entradas : ${cantEnt}`;
    // let precioFin2 = calcularPrecioFinal()
    // console.log("precioFin2" + precioFin2)
    document.getElementById("totalMod").innerHTML=`Total a pagar: $ ${calcularPrecioFinal()}`;

} 
/*
cantEnt
desc
descTotal
precioFin
*/