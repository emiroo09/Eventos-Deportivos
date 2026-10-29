// DATOS PARA FILTRAT //

// Primer filtro: proyectos //

const dwemi = [

//regiones//

{id:1, name:"Festejos en Estadios", image: "img/foto1.jpeg", genero: "regiones",description: "Festejo de campeonato que organizamos en un estadio mundial"},
{id:2, name:"Conciertos internacionales", image: "img/foto1.jpeg", genero: "regiones",description: "Concierto internacional proyectado con tematica ranchera"},
{id:3, name:"Afterparties con famosos", image: "img/foto1.jpeg", genero: "regiones",description: "Fiestas privadas con cantantes internacionales despues de sus conciertos"},
{id:4, name:"Islas privadas", image: "img/foto1.jpeg", genero: "regiones",description: "Llevamos la fiesta a islas privadas con los artistas mas famosos"},

// unete //

{id:1, name:"Tiendas", image: "img/foto1.jpeg", genero: "unete",description: "Articulos para eventos de recuerdo"},
{id:1, name:"DJs Exclusivos", image: "img/foto1.jpeg", genero: "unete",description: "Traemos la fiesta desde los djs mas famosos hasta su pais"},
{id:1, name:"Mundiales", image: "img/foto1.jpeg", genero: "unete",description: "Organizamos eventos de medio tiempo y campeonato en partidos de futbol"},
{id:1, name:"Partidos Privados", image: "img/foto1.jpeg", genero: "unete",description: "Podemos hacer que vivan con sus amigos una experiencia unica en el estadio privado"},

];

// Obtener los contenedores y botones del DOM
const dwemiContainer = document.getElementById("region-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas 
function renderDw(genero) {
    let dwemiToRender = [];
    if (genero === "all") {
        dwemiToRender = dwemi;
    } else {
        dwemiToRender = dwemi.filter(Dwemi => Dwemi.genero === genero);
    }
}