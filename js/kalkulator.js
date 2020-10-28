let btn = document.querySelectorAll(".btn-angka > button");
let mat = document.querySelectorAll(".btn-mat > button");
let tampil = document.querySelector("#tampil");
let pilihan = null;
let prev;
let next;

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = () => {
        if (tampil.value == "0") {
            tampil.value = btn[i].innerHTML;
        } else {
            tampil.value = tampil.value + btn[i].innerHTML;
        }
    }
}

mat[0].onclick = () => {
    tampil.value = "0";
    pilihan = null;
}
// tambah
mat[1].onclick = () => {
    // action
    pilihan = "tambah";
    prev = tampil.value;
    tampil.value = "0";
}
// kurang
mat[2].onclick = () => {
    // action
    pilihan = "kurang";
    prev = tampil.value;
    tampil.value = "0";
}
// kali
mat[3].onclick = () => {
    // action
    pilihan = "kali";
    prev = tampil.value;
    tampil.value = "0";
}
// bagi
mat[4].onclick = () => {
    // action
    pilihan = "bagi";
    prev = tampil.value;
    tampil.value = "0";
}
// sama dengan
mat[5].onclick = () => {
    // action
    next = tampil.value;
    tampil.value = kalkulator(pilihan);
}

let kalkulator = (pilihan) => {
    let hasil = 0;
    if (pilihan != null) {
        switch (pilihan) {
            case "tambah":
                hasil = parseFloat(prev) + parseFloat(next);
                break;
            case "kurang":
                hasil = parseFloat(prev) - parseFloat(next);
                break;
            case "kali":
                hasil = parseFloat(prev) * parseFloat(next);
                break;
            case "bagi":
                hasil = parseFloat(prev) / parseFloat(next);
                break;
        }
    }
    return hasil;
}