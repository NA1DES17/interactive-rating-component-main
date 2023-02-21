var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");

uno.onclick = () => {
  console.log("1");
  uno.style.backgroundColor = "#fc7615";
  uno.style.color = "#feffff";
  dos.style.backgroundColor = "#232c35";
  tres.style.backgroundColor = "#232c35";
  cuatro.style.backgroundColor = "#232c35";
  cinco.style.backgroundColor = "#232c35";
};
dos.onclick = () => {
  console.log("2");
  dos.style.backgroundColor = "#fc7615";
  dos.style.color = "#feffff";
  uno.style.backgroundColor = "#232c35";
  tres.style.backgroundColor = "#232c35";
  cuatro.style.backgroundColor = "#232c35";
  cinco.style.backgroundColor = "#232c35";
};
tres.onclick = () => {
  console.log("3");
  tres.style.backgroundColor = "#fc7615";
  tres.style.color = "#feffff";
  dos.style.backgroundColor = "#232c35";
  uno.style.backgroundColor = "#232c35";
  cuatro.style.backgroundColor = "#232c35";
  cinco.style.backgroundColor = "#232c35";
};
cuatro.onclick = () => {
  console.log("4");
  cuatro.style.backgroundColor = "#fc7615";
  cuatro.style.color = "#feffff";
  dos.style.backgroundColor = "#232c35";
  tres.style.backgroundColor = "#232c35";
  uno.style.backgroundColor = "#232c35";
  cinco.style.backgroundColor = "#232c35";
};
cinco.onclick = () => {
  console.log("5");
  cinco.style.backgroundColor = "#fc7615";
  cinco.style.color = "#feffff";
  dos.style.backgroundColor = "#232c35";
  tres.style.backgroundColor = "#232c35";
  uno.style.backgroundColor = "#232c35";
  cuatro.style.backgroundColor = "#232c35";
};
