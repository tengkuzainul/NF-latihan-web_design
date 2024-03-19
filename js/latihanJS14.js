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

  let harga;

  switch (produk) {
    case "TV":
      harga = 20000000;
      break;
    case "AC":
      harga = 40000000;
      break;
    case "Kulkas":
      harga = 100000000;
      break;
    default:
      harga = 0;
      break;
  }

  let hargaKotor = harga * jumlah;

  let diskon;
  if (produk === "Kulkas" && jumlah >= 3) {
    diskon = 0.3 * hargaKotor;
  } else if (produk === "AC" && jumlah >= 3) {
    diskon = 0.2 * hargaKotor;
  } else {
    diskon = 0.1 * hargaKotor;
  }

  swal({
    title: "Good job!",
    text: `Nama Pelanggan: ${nama}
           Produk Yang Dibeli: ${produk}
           Harga Produk: ${hargaKotor}
           Qty: ${jumlah}
           Harga Total : ${diskon}`,
    icon: "success",
    button: "Done!",
  });
}
