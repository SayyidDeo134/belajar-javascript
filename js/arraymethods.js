let nilai = [
    { nama: "Budi", ipa: 85, bahasa: 90, matematika: 80 },
    { nama: "Anies", ipa: 100, bahasa: 90, matematika: 80 },
    { nama: "Tejo", ipa: 85, bahasa: 95, matematika: 80 },
    { nama: "Anik", ipa: 85, bahasa: 90, matematika: 85 },
];

let nama = ["Budi", "Anies", "Tejo", "Anik"];

// menambahkan data pada array menggunakan push()
nama.push("Sandi");
// mengambil data terakhir dan memperbarui data yang sudah diambil tadi
// nama.pop()

// mengambil data pertama dan memperbarui data yang sudah diambil tadi
// nama.shift()

// menambahkan data di index pertama 
// nama.unshift(...items)

// mengambil data dengan limit tertentu dan menghapus tempat asal / data array original
// nama.splice(...index_ke, ...banyak_tampil)

// mengambil data dengan limit tertentu dan tidak menghapus tempat asal / data array original
// nama.slice(...index_ke, ...banyak_tampil)

let mapel = ["IPA", "Bahasa", "Matematika"];
// Menggabungkan 2 data array yang berbeda
// nama.concat(mapel);

// foreach pada javascript
// nama.forEach((isiNama) => {
//     console.log(isiNama);
// })
// Pencarian pada data array
// nilai.filter((a) => {
//     if (a.ipa > 80) {
//         console.log(a);
//     }
// })