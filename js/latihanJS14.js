const form = document.getElementById("form");
const produkPilihan = ["TV", "AC", "Kulkas"];
let pilihProduk = `<option value="" disabled selected>--- Pilihan Produk ---</option>`;

for (let p of produkPilihan) {
  pilihProduk += `<option value="${p}">${p}</option>`;
}

form.produk.innerHTML = pilihProduk;

function transaksi() {
  const nama = form.nama.value;
  const produk = form.produk.value;
  const jumlah = form.jumlah.value;
}
