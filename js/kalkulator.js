let btn = document.querySelectorAll(".btn-angka > button");
let tampil = document.querySelector("#tampil");

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = () => {
        tampil.value = btn[i].innerHTML;
    }
}