var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var submit = document.getElementById("submit");
/* ----------------------------------------- */
var rating = undefined;
/* ----------------------------------------- */
var tarjeta = document.getElementById("tarjeta");
var tarjetaTY = document.getElementById("tarjeta-thankyou");
/* var mostrador = document.getElementById("mostador-rating"); */

uno.onclick = () => {
  rating = 1;
  console.log(`You selected ${rating} out of 5`);
  uno.style.backgroundColor = "#fc7615";
  uno.style.color = "#feffff";
  dos.style.backgroundColor = "#232c35";
  tres.style.backgroundColor = "#232c35";
  cuatro.style.backgroundColor = "#232c35";
  cinco.style.backgroundColor = "#232c35";
};
dos.onclick = () => {
  rating = 2;
  console.log(`You selected ${rating} out of 5`);
  dos.style.backgroundColor = "#fc7615";
  dos.style.color = "#feffff";
  uno.style.backgroundColor = "#232c35";
  tres.style.backgroundColor = "#232c35";
  cuatro.style.backgroundColor = "#232c35";
  cinco.style.backgroundColor = "#232c35";
};
tres.onclick = () => {
  rating = 3;
  console.log(`You selected ${rating} out of 5`);
  tres.style.backgroundColor = "#fc7615";
  tres.style.color = "#feffff";
  dos.style.backgroundColor = "#232c35";
  uno.style.backgroundColor = "#232c35";
  cuatro.style.backgroundColor = "#232c35";
  cinco.style.backgroundColor = "#232c35";
};
cuatro.onclick = () => {
  rating = 4;
  console.log(`You selected ${rating} out of 5`);
  cuatro.style.backgroundColor = "#fc7615";
  cuatro.style.color = "#feffff";
  dos.style.backgroundColor = "#232c35";
  tres.style.backgroundColor = "#232c35";
  uno.style.backgroundColor = "#232c35";
  cinco.style.backgroundColor = "#232c35";
};
cinco.onclick = () => {
  rating = 5;
  console.log(`You selected ${rating} out of 5`);
  cinco.style.backgroundColor = "#fc7615";
  cinco.style.color = "#feffff";
  dos.style.backgroundColor = "#232c35";
  tres.style.backgroundColor = "#232c35";
  uno.style.backgroundColor = "#232c35";
  cuatro.style.backgroundColor = "#232c35";
};
submit.onclick = () => {
  if (rating != undefined) {
    tarjeta.style.display = "none";
    tarjetaTY.style.display = "flex";
    document.getElementById(
      "mostador-rating"
    ).innerHTML = `You selected ${rating} out of 5`;
  } else {
    alert("Rating please!");
  }
};
