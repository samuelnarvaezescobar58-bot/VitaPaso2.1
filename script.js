const HABITOS=[
"Beber suficiente agua",
"Dormir entre 7 y 9 horas",
"Comer frutas",
"Comer verduras",
"Hacer ejercicio",
"Caminar al aire libre",
"Evitar exceso de azúcar",
"Reducir comida rápida",
"Desayunar",
"Buena higiene",
"Lavarse las manos",
"Cepillarse dientes",
"Usar hilo dental",
"Postura correcta",
"Estirarse al despertar",
"Usar protector solar",
"Evitar trasnochar",
"Porciones adecuadas",
"Reducir sal",
"Chequeos médicos",

"Leer",
"Aprender algo nuevo",
"Practicar gratitud",
"Meditar",
"Escuchar música relajante",
"Escribir pensamientos",
"Organizar tu día",
"Evitar estrés",
"Tomar descansos",
"Respirar profundo",
"Pensar positivo",
"Reducir redes",
"Resolver rompecabezas",
"Establecer metas",
"Celebrar logros",
"Manejar emociones",
"Escuchar podcasts",
"Practicar concentración",
"Evitar pensamientos negativos",
"Tener hobbies",

"Saludar con amabilidad",
"Escuchar a los demás",
"Tiempo con familia",
"Amistades saludables",
"Ayudar a otros",
"Practicar empatía",
"Resolver conflictos",
"Decir gracias",
"Evitar discusiones",
"Tiempo con amigos",

"Mantener habitación ordenada",
"Planificar semana",
"Levantarse temprano",
"Limitar pantallas",
"Naturaleza",
"Escuchar tu cuerpo",
"Tener rutina",
"Ahorrar dinero",
"Pausas activas",
"Espacio limpio"
];

function guardarPerfil(){

let nombre=document.getElementById("nombre").value;

localStorage.setItem("nombre",nombre);

document.getElementById("saludo").innerText="Hola "+nombre;

generarRutina();

}

function generarHabitos(){

let contenedor=document.getElementById("listaHabitos");

let seleccion=[];

while(seleccion.length<6){

let random=Math.floor(Math.random()*HABITOS.length);

let h=HABITOS[random];

if(!seleccion.includes(h)){
seleccion.push(h);
}

}

seleccion.forEach(h=>{

let div=document.createElement("div");

div.className="habito";

div.innerText=h;

div.onclick=function(){

div.classList.toggle("activo");

actualizar();

};

contenedor.appendChild(div);

});

}

function actualizar(){

let habitos=document.querySelectorAll(".habito");

let completados=0;

habitos.forEach(h=>{

if(h.classList.contains("activo")){
completados++;
}

});

let porcentaje=(completados/6)*100;

document.getElementById("progreso").style.width=porcentaje+"%";

document.getElementById("textoProgreso").innerText=completados+" de 6 hábitos completados";

let total=parseInt(localStorage.getItem("habitosTotal")||0);

localStorage.setItem("habitosTotal",total+completados);

cargarStats();

}

function generarRutina(){

let edad=document.getElementById("edad").value;

let texto="";

if(edad<18){

texto="Caminar 20 minutos, estiramientos y dormir 8 horas.";

}else{

texto="Ejercicio moderado 30 minutos, hidratación y descanso adecuado.";

}

document.getElementById("rutinaTexto").innerText=texto;

}

function cargarStats(){

let total=localStorage.getItem("habitosTotal")||0;

document.getElementById("stats").innerText="Hábitos completados totales: "+total;

}

function responder(){

let pregunta=document.getElementById("pregunta").value.toLowerCase();

let respuesta="Mantener hábitos saludables mejora tu vida.";

if(pregunta.includes("agua")){
respuesta="Beber 2 litros de agua al día es recomendable.";
}

if(pregunta.includes("sueño")){
respuesta="Dormir entre 7 y 9 horas mejora la salud.";
}

let chat=document.getElementById("chat");

chat.innerHTML+="<p><b>Tú:</b> "+pregunta+"</p>";
chat.innerHTML+="<p><b>Vita:</b> "+respuesta+"</p>";

document.getElementById("pregunta").value="";

}

generarHabitos();

cargarStats();