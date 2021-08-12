let button = document.getElementById("theboxes");
button.addEventListener("click", generate);
let old = 0,
  i = 1;
function generate() {
  let n = document.getElementById("num").value;
  n = parseInt(old) + parseInt(n);
  for (; i <= n; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.borderRadius = `${Math.floor(Math.random() * 40) + 1}px`;
    box.style.border = `${
      Math.floor(Math.random() * 5) + 1
    }px ${randBorder()} ${randColor()}`;
    box.style.background = `${randColor()}`;
    document.getElementById("boxes").appendChild(box);
    box.innerHTML = i;
    old = document.getElementById("boxes").lastElementChild.innerHTML;
    document.body.style.background = `${randColor()}`;
  }
}
function randBorder() {
  let rand = Math.floor(Math.random() * 3) + 1;
  switch (rand) {
    case 1:
      return "solid";
    case 2:
      return "dotted";
    case 3:
      return "dashed";
  }
}
function randColor() {
  var chars = "1234567890abcdef";
  var color = "";
  for (var i = 0; i < 6; i++) {
    var rand = Math.floor(Math.random() * chars.length);
    color += chars.substring(rand, rand + 1);
  }
  return "#" + color;
}
