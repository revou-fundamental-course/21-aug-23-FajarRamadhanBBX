

/*
prompt("messsage","default value") //meminta input kepada user

function ubahNama (){
    let nama = prompt("Siapa nama Kamu?","");
    document.getElementById("name").innerHTML = nama
}

getElementById untuk mengambil sebuah id
assEventListener untuk mengambil dari suatu tindakan

let tombol = document.getElementById("gantiNama").addEventListener("click", function(){
    ubahNama()
}) //setiap di klik akan menjalankan function
*/
let nama = prompt("Siapa nama Kamu?","");
document.getElementById("name").innerHTML = nama;

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName("bg-sekolah");
  if (n > imgList.length) slideIndex = 1;
  else if (n < 1) slideIndex = imgList.length;

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none"; //meng-hide gambar
  }

  imgList[slideIndex - 1].style.display = "block"; //menampilkan gambar
}

setInterval(() => {
  plusDivs(1);
}, 3000);

function validateForm(){
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;
    
    if (name == "" || birthDate == "" || gender == "" || messages == ""){
        alert("Tidak boleh ada kolom yang kosong!");
        return false
    }

    setSenderUI(name, birthDate, gender, messages);

    return false
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}