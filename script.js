var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
/* ----------------------------------------- */
var rating = undefined;

uno.onclick = () => {
  rating = 1;
  console.log(`El rating es: ${rating}`);
  uno.style.backgroundColor = "#fc7615";
  uno.style.color = "#feffff";
  dos.style.backgroundColor = "#232c35";
  tres.style.backgroundColor = "#232c35";
  cuatro.style.backgroundColor = "#232c35";
  cinco.style.backgroundColor = "#232c35";
};
dos.onclick = () => {
  rating = 2;
  console.log(`El rating es: ${rating}`);
  dos.style.backgroundColor = "#fc7615";
  dos.style.color = "#feffff";
  uno.style.backgroundColor = "#232c35";
  tres.style.backgroundColor = "#232c35";
  cuatro.style.backgroundColor = "#232c35";
  cinco.style.backgroundColor = "#232c35";
};
tres.onclick = () => {
  rating = 3;
  console.log(`El rating es: ${rating}`);
  tres.style.backgroundColor = "#fc7615";
  tres.style.color = "#feffff";
  dos.style.backgroundColor = "#232c35";
  uno.style.backgroundColor = "#232c35";
  cuatro.style.backgroundColor = "#232c35";
  cinco.style.backgroundColor = "#232c35";
};
cuatro.onclick = () => {
  rating = 4;
  console.log(`El rating es: ${rating}`);
  cuatro.style.backgroundColor = "#fc7615";
  cuatro.style.color = "#feffff";
  dos.style.backgroundColor = "#232c35";
  tres.style.backgroundColor = "#232c35";
  uno.style.backgroundColor = "#232c35";
  cinco.style.backgroundColor = "#232c35";
};
cinco.onclick = () => {
  rating = 5;
  console.log(`El rating es: ${rating}`);
  cinco.style.backgroundColor = "#fc7615";
  cinco.style.color = "#feffff";
  dos.style.backgroundColor = "#232c35";
  tres.style.backgroundColor = "#232c35";
  uno.style.backgroundColor = "#232c35";
  cuatro.style.backgroundColor = "#232c35";
};
