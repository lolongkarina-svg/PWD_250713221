function fn_ValForm() {
  var sNama = document.getElementById("nama").value;
  var sEmail = document.getElementById("email").value;
  var sUmur = document.getElementById("umur").value;
  var sKategori = document.getElementById("kategori").value;
  var sMsg = "";
  var iUmur;
  var sInfo = "";
  var sPilihan = "";
  var polaEmail = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

  if (sNama == "") {
    sMsg += "\n* Nama belum diisi";
  }
  if (sEmail == "") {
    sMsg += "\n* Email belum diisi";
  } else if (!polaEmail.test(sEmail)) {
    sMsg += "\n* Format email tidak valid (gunakan huruf kecil)";
  }
  if (sUmur == "") {
    sMsg += "\n* Umur belum diisi";
  } else {
    iUmur = Number(sUmur);
    if (isNaN(iUmur) || sUmur.trim() == "" || !/^\d+$/.test(sUmur)) {
      sMsg += "\n* Umur harus berupa angka";
    } else if (iUmur < 17 || iUmur > 65) {
      sMsg += "\n* Umur harus berada di antara 17 sampai 65 tahun";
    }
  }
  if (sKategori == "") {
    sMsg += "\n* Paket member belum dipilih";
  }

  if (sMsg != "") {
    alert("Peringatan:" + sMsg);
    return false;
  }

  if (iUmur <= 25) {
    sInfo = "Paket Pelajar";
  } else {
    sInfo = "Paket Umum";
  }

  switch (sKategori) {
    case "S":
      sPilihan = "Silver";
      break;
    case "G":
      sPilihan = "Gold";
      break;
    case "P":
      sPilihan = "Platinum";
      break;
    default:
      alert("Paket member tidak valid");
      return false;
  }

  alert("Terima kasih " + sNama + " ! Anda terdaftar di paket " +
        sPilihan + " (" + sInfo + ").");
  return false;
}
