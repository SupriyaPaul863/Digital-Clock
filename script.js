const hourele = document.getElementById("hour");
const minele = document.getElementById("min");
const secele = document.getElementById("sec");
const ampmele = document.getElementById("ampm");

function Clock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourele.innerHTML = h;
  minele.innerText = m;
  secele.innerHTML = s;
  ampmele.innerHTML = ampm;
 

  //now we have to call the function every 1sec so that time gets updated on its own
  setTimeout(() => {
    Clock();
  }, 1000);
}
Clock();
