// ===== DATA HALAMAN (Lembar B & D) =====
// Data identitas disimpan di JavaScript, bukan ditulis berulang di HTML.
const profil = {
  nama: "Deninda Afizzano",
  nim: "25523116",
  peran: "Mahasiswa Informatika dan pecinta mobil JDM",
  bio: "Halaman ini berisi koleksi mobil favorit saya, lengkap dengan merek, tahun, dan jenis mobil.",
  keahlian: ["HTML", "CSS", "JavaScript", "Responsive Web Design"],
  kontak: {
    instagram: "@denindaafizzano",
  },
};

// Array of object: setiap mobil mempunyai beberapa properti.
const daftarMobil = [
  {
    nama: "Lancer Evo 9",
    merek: "Mitsubishi",
    tahun: 2005,
    jenis: "Sedan Sport",
    gambar: "../assets/mobil1.webp",
    alt: "Mitsubishi Lancer Evo 9 dalam koleksi",
  },
  {
    nama: "BMW M3 GTR",
    merek: "BMW",
    tahun: 2000,
    jenis: "Sport",
    gambar: "../assets/mobil2.webp",
    alt: "BMW M3 GTR dalam koleksi",
  },
  {
    nama: "GTR R34",
    merek: "Nissan",
    tahun: 2002,
    jenis: "Sport",
    gambar: "../assets/mobil3.webp",
    alt: "Nissan GTR R34 dalam koleksi",
  },
];
const jumlahMobilBawaan = daftarMobil.length;

// Mobil tambahan disimpan di browser; data bawaan tetap berasal dari kode.
const kunciMobilTersimpan = "mobil-tambahan-koleksi";
try {
  const mobilTersimpan = JSON.parse(
    localStorage.getItem(kunciMobilTersimpan) ?? "[]"
  );
  if (Array.isArray(mobilTersimpan)) {
    daftarMobil.push(
      ...mobilTersimpan
        .filter((mobil) =>
          mobil &&
          typeof mobil.nama === "string" && mobil.nama.trim() &&
          typeof mobil.merek === "string" && mobil.merek.trim() &&
          Number.isInteger(mobil.tahun) && mobil.tahun >= 1950 &&
          typeof mobil.jenis === "string" && mobil.jenis.trim()
        )
        .map(({ nama, merek, tahun, jenis }) => ({
          nama: nama.trim(),
          merek: merek.trim(),
          tahun,
          jenis: jenis.trim(),
          gambar: "",
          alt: "",
        }))
    );
  }
} catch {
  // Halaman tetap berfungsi jika penyimpanan tidak tersedia atau rusak.
}

// ===== FUNGSI MURNI (Lembar C) =====
// Fungsi 1: hanya menerima data dan mengembalikan kalimat.
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// Fungsi 2: hanya menerima array dan mengembalikan teks.
const formatKeahlian = (daftar) => daftar.join(" · ");

// Contoh hasil fungsi murni dapat diperiksa di Console.
console.log("Hasil perkenalan:", buatPerkenalan(profil));
console.log("Hasil format keahlian:", formatKeahlian(profil.keahlian));

// Fungsi ini membuat elemen DOM, jadi bukan fungsi murni.
// Data mobil yang diterima tidak diubah.
function buatKartu({ nama, merek, tahun, jenis }) {
  const kartu = document.createElement("article");
  kartu.className = "kartu";

  const judul = document.createElement("h3");
  judul.className = "kartu__judul";
  judul.textContent = nama;
  kartu.append(judul);

  for (const [label, nilai] of [
    ["Merek", merek],
    ["Tahun", tahun],
    ["Jenis", jenis],
  ]) {
    const detail = document.createElement("p");
    const namaLabel = document.createElement("strong");
    namaLabel.textContent = `${label}: `;
    detail.append(namaLabel, document.createTextNode(String(nilai)));
    kartu.append(detail);
  }

  return kartu;
}

// Membuat satu figure galeri dari data mobil.
function buatGaleri({ nama, gambar, alt }) {
  const figure = document.createElement("figure");

  if (gambar) {
    const img = document.createElement("img");
    img.src = gambar;
    img.alt = alt || `Foto ${nama}`;
    img.width = 640;
    img.height = 360;
    img.loading = "lazy";
    figure.append(img);
  } else {
    const placeholder = document.createElement("p");
    placeholder.className = "galeri__placeholder";
    placeholder.textContent = "Gambar belum tersedia";
    placeholder.setAttribute("aria-label", `Gambar ${nama} belum tersedia`);
    figure.append(placeholder);
  }

  const caption = document.createElement("figcaption");
  caption.textContent = nama;

  figure.append(caption);
  return figure;
}

// ===== DATA PROFIL DITAMPILKAN KE HALAMAN =====
document.title = `Koleksi Mobil — ${profil.nama}`;

const judulProfil = document.querySelector("#judul-profil");
judulProfil?.replaceChildren(document.createTextNode(`Koleksi Mobil ${profil.nama}`));

const deskripsiProfil = document.querySelector("#deskripsi-profil");
deskripsiProfil?.replaceChildren(document.createTextNode(profil.bio));

const footerIdentitas = document.querySelector("#identitas-footer");
footerIdentitas?.replaceChildren(
  document.createTextNode(`Nama: ${profil.nama} | NIM: ${profil.nim}`)
);

const tentangTeks = document.querySelector("#tentang-teks");
tentangTeks?.replaceChildren(
  document.createTextNode(
    `${buatPerkenalan(profil)}. Keahlian: ${formatKeahlian(profil.keahlian)}. ` +
    `Instagram: ${profil.kontak?.instagram ?? "Belum diisi"}.`
  )
);

// ===== ARRAY METHODS (Lembar D) =====
// map: mengubah setiap object menjadi nama mobil.
const namaMobil = daftarMobil.map((mobil) => mobil.nama);

// filter: mengambil hanya mobil yang termasuk jenis Sport.
const mobilSport = daftarMobil.filter((mobil) =>
  mobil.jenis.includes("Sport")
);

// find: mengambil satu mobil pertama yang cocok.
const gtr = daftarMobil.find((mobil) => mobil.nama === "GTR R34");

// Salinan array diurutkan agar daftarMobil asli tidak berubah.
const urutTahun = [...daftarMobil].sort((a, b) => a.tahun - b.tahun);

// Wajib tampil di Console sesuai Lembar D.
console.table(profil.keahlian);
console.table(daftarMobil);
console.table(mobilSport);
console.log("Hasil find:", gtr);
console.log("Hasil map:", namaMobil);
console.table(urutTahun);

// ===== RENDER DATA KE HTML =====
const katalogMobil = document.querySelector(".katalog");
if (katalogMobil) {
  katalogMobil.replaceChildren(...daftarMobil.map(buatKartu));
}

const galeriMobil = document.querySelector("#galeri-mobil");
if (galeriMobil) {
  galeriMobil.replaceChildren(...daftarMobil.map(buatGaleri));
}

// ===== TEMA =====
const pengalihTema = document.querySelector("#tema");

if (pengalihTema) {
  const preferensiTema = window.matchMedia("(prefers-color-scheme: dark)");
  let temaTersimpan = null;

  try {
    temaTersimpan = localStorage.getItem("tema-koleksi-mobil");
  } catch {
    // Tema tetap dapat digunakan jika penyimpanan browser tidak tersedia.
  }

  const temaAwal =
    temaTersimpan ?? (preferensiTema.matches ? "dark" : "light");

  let temaAktif = temaAwal;

  function terapkanTema(tema) {
    temaAktif = tema;

    const gelap = temaAktif === "dark";
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
      localStorage.setItem("tema-koleksi-mobil", temaAktif);
    } catch {
      // Perubahan tema tetap berlaku sampai halaman ditutup.
    }
  });
}

// ===== FORM TAMBAH MOBIL =====
const formMobil = document.querySelector("#form-tambah-mobil");
const inputTahun = document.querySelector("#tahun");
const statusForm = document.querySelector("#status-form");

if (formMobil && katalogMobil && inputTahun && statusForm) {
  inputTahun.max = String(new Date().getFullYear());

  formMobil.addEventListener("submit", (event) => {
    event.preventDefault();

    const dataMobil = new FormData(formMobil);

    const mobilBaru = {
      nama: String(dataMobil.get("nama-mobil")).trim(),
      merek: String(dataMobil.get("merek")).trim(),
      tahun: Number(dataMobil.get("tahun")),
      jenis: String(dataMobil.get("jenis")).trim(),
      gambar: "",
      alt: "",
    };

    daftarMobil.push(mobilBaru);
    katalogMobil.append(buatKartu(mobilBaru));
    if (galeriMobil) {
      galeriMobil.append(buatGaleri(mobilBaru));
    }

    formMobil.reset();
    try {
      const mobilTambahan = daftarMobil.slice(jumlahMobilBawaan);
      localStorage.setItem(kunciMobilTersimpan, JSON.stringify(mobilTambahan));
      statusForm.textContent = `${mobilBaru.nama} berhasil ditambahkan dan disimpan.`;
    } catch {
      statusForm.textContent = `${mobilBaru.nama} ditambahkan, tetapi tidak dapat disimpan setelah halaman ditutup.`;
    }

    console.table(daftarMobil);
  });
}
