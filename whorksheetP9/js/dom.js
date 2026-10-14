import {
  profil,
  daftarMobil,
  buatPerkenalan,
  formatKeahlian,
  jumlahMobilBawaan,
  kunciMobilTersimpan,
} from "./app.js";

// ==========================================
// Lembar A: Pemilihan Elemen DOM
// ==========================================
const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");

const formMobil = document.querySelector("#form-tambah-mobil");
const inputNama = document.querySelector("#nama-mobil");
const inputMerek = document.querySelector("#merek");
const inputTahun = document.querySelector("#tahun");
const inputJenis = document.querySelector("#jenis");
const tombolSubmit = document.querySelector("#tombol-submit");
const statusForm = document.querySelector("#status-form");

const galatNama = document.querySelector("#galat-nama");
const galatMerek = document.querySelector("#galat-merek");
const galatTahun = document.querySelector("#galat-tahun");
const galatJenis = document.querySelector("#galat-jenis");

const judulProfil = document.querySelector("#judul-profil");
const deskripsiProfil = document.querySelector("#deskripsi-profil");
const tentangTeks = document.querySelector("#tentang-teks");
const footerIdentitas = document.querySelector("#identitas-footer");
const pengalihTema = document.querySelector("#tema");

// Inisialisasi Teks Profil & Identitas
if (judulProfil) {
  judulProfil.textContent = `Koleksi Mobil ${profil.nama}`;
}
if (deskripsiProfil) {
  deskripsiProfil.textContent = profil.bio;
}
if (tentangTeks) {
  tentangTeks.textContent = `${buatPerkenalan(profil)}. Keahlian: ${formatKeahlian(
    profil.keahlian
  )}. Instagram: ${profil.kontak?.instagram ?? "Belum diisi"}.`;
}
if (footerIdentitas) {
  footerIdentitas.textContent = `Nama: ${profil.nama} | NIM: ${profil.nim}`;
}
document.title = `Koleksi Mobil — ${profil.nama}`;

// ==========================================
// Lembar B: Menyusun Elemen Kartu dari Data
// ==========================================
function buatKartu({ nama, merek, tahun, jenis }) {
  const li = document.createElement("li");
  li.className = "kartu";

  const judul = document.createElement("h3");
  judul.className = "kartu__judul";
  judul.textContent = nama;
  li.append(judul);

  const daftarAtribut = [
    ["Merek", merek],
    ["Tahun", tahun],
    ["Jenis", jenis],
  ];

  for (const [label, nilai] of daftarAtribut) {
    const detail = document.createElement("p");
    const namaLabel = document.createElement("strong");
    namaLabel.textContent = `${label}: `;
    detail.append(namaLabel, document.createTextNode(String(nilai)));
    li.append(detail);
  }

  return li;
}

// ==========================================
// Lembar D.1: Fungsi Render Wadah Proyek
// ==========================================
function render(daftar) {
  if (!wadah || !kosong) return;

  // 1. Kosongkan wadah lebih dulu
  wadah.textContent = "";

  // 2. Periksa keadaan data kosong
  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

  // 3. Isi ulang elemen kartu
  daftar.forEach((mobil) => {
    wadah.append(buatKartu(mobil));
  });
}

// Inisialisasi tampilan awal daftar mobil
render(daftarMobil);

// ==========================================
// Lembar C: Event Delegation pada Tombol Filter
// ==========================================
function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    const aktif = tombol === tombolAktif;
    tombol.classList.toggle("aktif", aktif);
    tombol.setAttribute("aria-pressed", String(aktif));
  });
}

let kategoriAktif = "semua";

if (barisFilter) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return; // Klik di luar tombol, abaikan

    kategoriAktif = tombol.dataset.kategori ?? "semua";

    const terpilih = daftarMobil.filter(
      (mobil) =>
        kategoriAktif === "semua" ||
        (mobil.kategori &&
          mobil.kategori.toLowerCase() === kategoriAktif.toLowerCase()) ||
        (mobil.jenis &&
          mobil.jenis.toLowerCase() === kategoriAktif.toLowerCase())
    );

    tandaiTombolAktif(tombol);
    render(terpilih);
  });
}

// ==========================================
// Lembar D.2: Validasi Form Real-time & Submit
// ==========================================
const tahunSekarang = new Date().getFullYear();
if (inputTahun) {
  inputTahun.max = String(tahunSekarang);
}

function periksaKolom(input, spanGalat, pesanGalat) {
  if (!input || !spanGalat) return false;
  if (pesanGalat) {
    spanGalat.textContent = pesanGalat;
    input.setAttribute("aria-invalid", "true");
    return false;
  } else {
    spanGalat.textContent = "";
    input.setAttribute("aria-invalid", "false");
    return true;
  }
}

function validasiInputNama(tampilkan = false) {
  const nilai = inputNama?.value.trim() ?? "";
  let pesan = "";
  if (!nilai) {
    pesan = "Nama mobil wajib diisi (minimal 2 karakter).";
  } else if (nilai.length < 2) {
    pesan = "Nama mobil terlalu pendek (minimal 2 karakter).";
  }
  return periksaKolom(inputNama, galatNama, tampilkan ? pesan : "");
}

function validasiInputMerek(tampilkan = false) {
  const nilai = inputMerek?.value.trim() ?? "";
  let pesan = "";
  if (!nilai) {
    pesan = "Merek mobil wajib diisi (minimal 2 karakter).";
  } else if (nilai.length < 2) {
    pesan = "Merek mobil terlalu pendek (minimal 2 karakter).";
  }
  return periksaKolom(inputMerek, galatMerek, tampilkan ? pesan : "");
}

function validasiInputTahun(tampilkan = false) {
  const teks = inputTahun?.value.trim() ?? "";
  const thn = Number(teks);
  let pesan = "";
  if (!teks) {
    pesan = `Tahun mobil wajib diisi antara 1950 dan ${tahunSekarang}.`;
  } else if (!Number.isInteger(thn) || thn < 1950 || thn > tahunSekarang) {
    pesan = `Tahun harus berupa bilangan bulat antara 1950 dan ${tahunSekarang}.`;
  }
  return periksaKolom(inputTahun, galatTahun, tampilkan ? pesan : "");
}

function validasiInputJenis(tampilkan = false) {
  const nilai = inputJenis?.value.trim() ?? "";
  let pesan = "";
  if (!nilai) {
    pesan = "Jenis mobil wajib diisi (contoh: Sedan Sport, Sport, SUV).";
  }
  return periksaKolom(inputJenis, galatJenis, tampilkan ? pesan : "");
}

function apakahSeluruhFormLayak() {
  const namaValid = (inputNama?.value.trim().length ?? 0) >= 2;
  const merekValid = (inputMerek?.value.trim().length ?? 0) >= 2;
  const thn = Number(inputTahun?.value.trim());
  const tahunValid =
    Number.isInteger(thn) && thn >= 1950 && thn <= tahunSekarang;
  const jenisValid = (inputJenis?.value.trim().length ?? 0) >= 1;

  return namaValid && merekValid && tahunValid && jenisValid;
}

function perbaruiStatusTombolSubmit() {
  if (tombolSubmit) {
    tombolSubmit.disabled = !apakahSeluruhFormLayak();
  }
}

// Pasang pendengar validasi saat pengguna mengetik
inputNama?.addEventListener("input", () => {
  validasiInputNama(true);
  perbaruiStatusTombolSubmit();
});

inputMerek?.addEventListener("input", () => {
  validasiInputMerek(true);
  perbaruiStatusTombolSubmit();
});

inputTahun?.addEventListener("input", () => {
  validasiInputTahun(true);
  perbaruiStatusTombolSubmit();
});

inputJenis?.addEventListener("input", () => {
  validasiInputJenis(true);
  perbaruiStatusTombolSubmit();
});

// Penanganan submit form
if (formMobil) {
  formMobil.addEventListener("submit", (event) => {
    // 1. Mencegah pemuatan ulang halaman bawaan browser
    event.preventDefault();

    const namaSah = validasiInputNama(true);
    const merekSah = validasiInputMerek(true);
    const tahunSah = validasiInputTahun(true);
    const jenisSah = validasiInputJenis(true);

    if (!namaSah) {
      inputNama?.focus();
      return;
    }
    if (!merekSah) {
      inputMerek?.focus();
      return;
    }
    if (!tahunSah) {
      inputTahun?.focus();
      return;
    }
    if (!jenisSah) {
      inputJenis?.focus();
      return;
    }

    const dataMobil = new FormData(formMobil);
    const namaBaru = String(dataMobil.get("nama-mobil")).trim();
    const merekBaru = String(dataMobil.get("merek")).trim();
    const tahunBaru = Number(dataMobil.get("tahun"));
    const jenisBaru = String(dataMobil.get("jenis")).trim();

    const mobilBaru = {
      nama: namaBaru,
      merek: merekBaru,
      tahun: tahunBaru,
      jenis: jenisBaru,
      kategori: jenisBaru,
      gambar: "",
      alt: "",
    };

    daftarMobil.push(mobilBaru);

    // Simpan data tambahan ke LocalStorage
    try {
      const mobilTambahan = daftarMobil.slice(jumlahMobilBawaan);
      localStorage.setItem(kunciMobilTersimpan, JSON.stringify(mobilTambahan));
      if (statusForm) {
        statusForm.textContent = `Mobil "${mobilBaru.nama}" berhasil ditambahkan dan disimpan!`;
      }
    } catch {
      if (statusForm) {
        statusForm.textContent = `Mobil "${mobilBaru.nama}" berhasil ditambahkan ke daftar sesi ini.`;
      }
    }

    // Perbarui tampilan dengan render sesuai kategori filter aktif
    const terpilih = daftarMobil.filter(
      (mobil) =>
        kategoriAktif === "semua" ||
        (mobil.kategori &&
          mobil.kategori.toLowerCase() === kategoriAktif.toLowerCase()) ||
        (mobil.jenis &&
          mobil.jenis.toLowerCase() === kategoriAktif.toLowerCase())
    );
    render(terpilih);

    // Reset isi form
    formMobil.reset();
    inputNama?.setAttribute("aria-invalid", "false");
    inputMerek?.setAttribute("aria-invalid", "false");
    inputTahun?.setAttribute("aria-invalid", "false");
    inputJenis?.setAttribute("aria-invalid", "false");
    if (galatNama) galatNama.textContent = "";
    if (galatMerek) galatMerek.textContent = "";
    if (galatTahun) galatTahun.textContent = "";
    if (galatJenis) galatJenis.textContent = "";

    perbaruiStatusTombolSubmit();
  });
}

// ==========================================
// Pengalih Tema (Dark Mode / Light Mode)
// ==========================================
if (pengalihTema) {
  const preferensiTema = window.matchMedia("(prefers-color-scheme: dark)");
  let temaTersimpan = null;

  try {
    temaTersimpan = localStorage.getItem("tema-koleksi-mobil");
  } catch {
  }

  const temaAwal = temaTersimpan ?? (preferensiTema.matches ? "dark" : "light");

  function terapkanTema(tema) {
    const gelap = tema === "dark";
    document.documentElement.dataset.theme = gelap ? "dark" : "light";
    pengalihTema.checked = gelap;

    const labelTema = pengalihTema.labels?.[0];
    if (labelTema) {
      labelTema.textContent = gelap
        ? "Matikan tema gelap"
        : "Aktifkan tema gelap";
    }
  }

  terapkanTema(temaAwal);

  pengalihTema.addEventListener("change", () => {
    const temaBaru = pengalihTema.checked ? "dark" : "light";
    terapkanTema(temaBaru);
    try {
      localStorage.setItem("tema-koleksi-mobil", temaBaru);
    } catch {
    }
  });
}
