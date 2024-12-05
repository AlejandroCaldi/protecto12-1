// console.log('Hola mundo! por segunda vez');


// document.getElementById('boton').onclick = function() {
//     document.getElementById('boton').innerText = "Botón Apretado";

//     /*
//     * document.getElementById('boton').innerHTML = "Botón Apretado";
//     * 
//     * Parecería lo mismo, pero se puede pasar coódigo malicioso por ese html
//     * y es una agujero de seguridad serio. 
//     * Pero hoy algunos navegadores ya han empezado a meter seguridad. 
//     * NUNCA tomar un valor tomado del usuario y pasarlo por innerHTML. 
//     */
// };

// con Jquery

// $("#boton").on("click",

//     function() {

//         $(this).text("Bébeme");
//     }
// );
   // .para clases de css, # para ids. nada para la etiqueta. 


// en javascript existen variables que guardan funciones. 
 
// accionClick = function() {

//     $(this).text("Bébeme");
// }


// $("#boton").on("click", accionClick);

// Al igual que en python la definición de la función tiene que ser anterior que la llamada a la función. 

// en JS existe el valor undefined. Si uan variable no està declarada rompe. Si está como undefined, no está definida pero no rompe. 
// undefined noes null, undefined, null y "" se consideran equivalentes si no se considera el tipo, pero ojo que en js existe
// el trutty falsy. === y !==. Donde no solo debe dar igual el valor, debe también ser igual el tipo de la varriable. 
// a java le da igual, porque las contiene el objeto y en la definiciòn ya llama a al creación de las mismas, (siempre que hablemso de objeto),
// pero en el caso de código de main o eventos el problema serài el mismo, si la variable no está declarada va a romper. 
//

// entonces las funciones se colocan a arriba o en un archivo de aparte. 
// y eso viene con imports... como en python. 

// para trabajar con el on ready. 

// $(document).ready(function() {
//     accionClick = function() {
//         $(this).text("Bébeme");
//     }

//     $("#boton").on("click", accionClick);

// });

// esto tiene en cuenta los tiempos de carga para que no haya asincronía. 
// la diferencia entre let y var difiere, let es más reciente y se define como local. 


$(document).ready(function() {

    solicitud = {
        "id" : 1,
        "nombre": "Juán",
        "apellido": "Pelotas"
    }

    let solicitudes = [solicitud, solicitud, solicitud];

    for (i = 0 ; i < solicitudes.length; i++ ) {
        $("#maestro").append(
            $("<li>").text(solicitudes[i].nombre + " " + solicitudes[i].apellido)
        );
    }


    $("#id").val(solicitud.id)
    $("#nombre").val(solicitud.nombre)
    $("#apellido").val(solicitud.apellido)
});
