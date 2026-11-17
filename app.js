// =====================================================================
//  Mi Coach — Fin de semana 1: registrar series
// =====================================================================
//
//  Idea general (léela antes de tocar nada):
//
//    1. Todas las series viven en un arreglo llamado `series`.
//       Cada serie es un objeto, por ejemplo:
//         { ejercicio: "Press banca", peso: 70, reps: 6, fecha: "2026-11-14" }
//
//    2. Cuando guardas una serie: la agregas al arreglo -> guardas -> redibujas.
//
//    3. Los datos se guardan en el propio teléfono (localStorage),
//       así que no necesitas servidor ni internet.
//
//  Lo marcado con  TODO  es tuyo. Lo demás ya funciona.
// =====================================================================


// ---------- Guardar / cargar (ya hecho, es tedio puro) ----------

const CLAVE = "mi-coach-series";

function cargarSeries() {
  try {
    const texto = localStorage.getItem(CLAVE);
    return texto ? JSON.parse(texto) : [];
  } catch {
    return []; // si algo falla, empezamos vacíos en vez de tronar
  }
}

function guardarSeries() {
  localStorage.setItem(CLAVE, JSON.stringify(series));
}

// Devuelve la fecha de hoy como "2026-11-16"
function hoy() {
  return new Date().toISOString().slice(0, 10);
}


// ---------- Estado de la app ----------

let series = cargarSeries();

// Referencias a elementos del HTML (búscalos en index.html por su id)
const form = document.getElementById("form-serie");
const inputEjercicio = document.getElementById("ejercicio");
const inputPeso = document.getElementById("peso");
const inputReps = document.getElementById("reps");
const lista = document.getElementById("lista-series");


// ---------- TODO 1: dibujar las series de hoy ----------
//
//  Objetivo: que dentro de <ul id="lista-series"> aparezca un <li>
//  por cada serie cuya fecha sea hoy, con texto tipo:
//      "Press banca — 70 kg × 6"
//
//  Pistas (en orden):
//    a) Primero vacía la lista:   lista.innerHTML = "";
//    b) Filtra solo las de hoy:   series.filter(s => ...)
//    c) Recorre el resultado y por cada una crea un <li>:
//         const li = document.createElement("li");
//         li.textContent = ...;
//         lista.appendChild(li);
//
//  Pruébalo: guarda una serie a mano en la consola del navegador y llama a dibujarSeries().

function dibujarSeries() {
  // tu código aquí
}


// ---------- TODO 2: guardar una serie al enviar el formulario ----------
//
//  Esto se ejecuta cuando tocas "Guardar serie".
//
//  Pistas:
//    a) evento.preventDefault()  -> evita que la página se recargue (ya está puesto).
//    b) Arma un objeto serie con los valores de los inputs.
//       OJO: inputPeso.value es TEXTO ("70"), no número. ¿Cómo lo conviertes?
//    c) Agrégalo al arreglo `series`.
//    d) Llama a guardarSeries() y luego a dibujarSeries().
//    e) Bonus: deja el peso escrito pero borra las reps, y pon el foco en reps.
//       (Piensa por qué: en el gym repites el mismo peso varias series.)

form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  // tu código aquí
});


// Al abrir la app, dibuja lo que ya estaba guardado
dibujarSeries();
