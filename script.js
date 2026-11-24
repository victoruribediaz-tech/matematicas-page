const btn = document.getElementById("btnGenerar");
const spanB = document.getElementById("valorB");
const spanC = document.getElementById("valorC");
const textoFuncion = document.getElementById("funcion");
const cajaLineal = document.getElementById("cajaLineal");
const cajaAfin = document.getElementById("cajaAfin");
const propLineal = document.getElementById("propLineal");
const propAfin = document.getElementById("propAfin");

// Devuelve un entero aleatorio entre min y max (ambos incluidos)
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generar() {
    const b = aleatorio(-3, 3);
    const c = aleatorio(-3, 3);

    spanB.textContent = b;
    spanC.textContent = c;

  // Limpiar las dos cajas antes de llenar la correcta
    propLineal.innerHTML = "";
    propAfin.innerHTML = "";
    cajaLineal.classList.remove("activa");
    cajaAfin.classList.remove("activa");

if (c === 0) {
    textoFuncion.textContent = `f(x) = ${b}x`;
    cajaLineal.classList.add("activa");
    propLineal.innerHTML = `
    <li>Gráfica: línea recta continua.</li>
    <li>Pasa por el origen (0, 0).</li>
    <li>Pendiente b = ${b}: ${descripcionPendiente(b)}</li>
    `;

} else {
    textoFuncion.textContent = `f(x) = ${b}x + (${c})`;
    cajaAfin.classList.add("activa");
    propAfin.innerHTML = `
    <li>Gráfica: línea recta que no pasa por el origen.</li>
    <li>Corta el eje Y en (0, ${c}).</li>
    <li>Pendiente b = ${b}: ${descripcionPendiente(b)}</li>
    <li>Es la traslación vertical de f(x) = ${b}x en ${c} unidades.</li>
    `;
}}

function descripcionPendiente(b) {
    if (b > 0) return "función creciente.";
    if (b < 0) return "función decreciente.";
    return "función constante (recta horizontal).";
}

btn.addEventListener("click", generar);
