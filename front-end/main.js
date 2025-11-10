const button = document.getElementById("button-klik");
const judul = document.getElementById("title");
button.addEventListener("click", function () {
  var name = prompt("Masukkan nama Anda:", "Nama Anda");
  judul.innerText = "Hello " + name.toUpperCase() + "!";
});
