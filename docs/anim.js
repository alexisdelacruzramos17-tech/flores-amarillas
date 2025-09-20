// Sincronizar las letras con la canción 
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [

  { text: "No llores, muñeco de nieve, justo en frente de mi", time: 5.5 },
  { text: "justo en frente de mí", time: 6 },
  { text: "¿Quién atrapará tus lágrimas si no puedes atraparme, cariño?", time: 9.5 },
  { text: "Si no puedes atraparme, cariño", time: 14 },
  { text: "No llores, muñeco de nieve", time: 18 },
  { text: "No me dejes asi", time: 20 },
  { text: "Un charco de agua no puede abrazarme, cariño", time: 22.5},
  { text: "No puede abrazarme, cariño", time: 28 },
  { text: "Quiero que sepas que nunca me iré", time: 33 },
  { text: "Porque soy el Sr. Snow,hasta que la muerte me congele", time: 36 },
  { text: "Sí, eres mi hogar", time: 38 },
  { text: "Mi hogar para todas las estaciones", time: 40 },
  { text: "Así que vamos, vayamos", time: 44 },
  { text: "Vayamos por debajo de cero y nos escondamos del sol", time: 45 },
  { text: "Te protegere por siempre y nos vamos a divertir", time: 49 },
  { text: "Sí, vayamos al Polo Norte y vivamos felices", time: 54 },
  { text: "Por favor, no llores, sin lágrimas ahora", time: 56 },
  { text: "Es navidad, Cariño", time: 57.5 },
  { text: "Mi muñeco de nieve y yo", time: 58 },
  { text: "Mi muñeco de nieve y yo", time: 68 },
  { text: "Cariño", time: 72 },
  { text: "No llores, muñeco de nieve", time: 81 },
  { text: "no le temas al sol", time: 183 },
  { text: "¿Quién me llevará sin piernas para correr, cariño?", time: 188 },
  { text: "Sin piernas para correr, cariño", time: 140 },
  { text: "No llores, muñeco de nieve", time: 169 },
  { text: "No derrames ni una lágrima", time: 176 },
  { text: "¿Quién escuchará mis secretos si no tienes orejas, cariño?", time: 183 },
  { text: "Si no tienes oidos, cariño", time: 188 },
 { text: "Quiero que sepas que nunca me iré", time: 140 },
  { text: "Porque soy el Sr. Snow", time: 120 },
  { text: "hasta que la muerte me congele", time: 100 },
  { text: "Sí, eres mi hogar", time: 100 },
  { text: "Mi hogar para todas las estaciones", time: 83 },
  { text: "Así que vamos", time: 91 },
  { text: "Vayamos", time: 97 },
  { text: "Vayamos por debajo de cero y nos escondamos del sol", time: 104 },
  { text: "Te portegere por siempre y nos vamos a divertir", time: 108 },
  { text: "Sí, vayamos al Polo Norte y vivamos felices", time: 144 },
  { text: "Por favor, no llores, sin lágrimas ahora", time: 148 },
  { text: "Es navidad, Cariño", time: 153 },
  { text: "Mi muñeco de nieve y yo", time: 158 },
  { text: "Mi muñeco de nieve y yo", time: 164 },
  { text: "Cariño", time: 169 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);