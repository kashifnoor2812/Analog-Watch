let hour = document.getElementById("hour");
let mint = document.getElementById("mint");
let sec = document.getElementById("sec");

const rotations = () => {
  const date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hrotation = 30 * hh + mm / 2;
  let mrotation = 6 * mm;
  let srotation = 6 * ss;

  hour.style.transform = `rotate(${hrotation}deg)`;
  mint.style.transform = `rotate(${mrotation}deg)`;
  sec.style.transform = `rotate(${srotation}deg)`;
};
setInterval(rotations, 1000);
