import { ambilNotisia } from "./api.js";
export const profil = {
  nama: "Deninda Afizzano",
  nim: "25523116",
  peran: "Mahasiswa Informatika dan pecinta mobil JDM",
  bio: "Halaman ini berisi koleksi mobil favorit saya, lengkap dengan merek, tahun, dan jenis mobil.",
  keahlian: ["HTML", "CSS", "JavaScript", "Responsive Web Design"],
  kontak: {
    instagram: "@denindaafizzano",
  },
};

export const daftarMobil = [
  {
    nama: "Lancer Evo 9",
    merek: "Mitsubishi",
    tahun: 2005,
    jenis: "Sedan Sport",
    kategori: "Sedan Sport",
    gambar: "../assets/mobil1.webp",
    alt: "Mitsubishi Lancer Evo 9 dalam koleksi",
  },
  {
    nama: "BMW M3 GTR",
    merek: "BMW",
    tahun: 2000,
    jenis: "Sport",
    kategori: "Sport",
    gambar: "../assets/mobil2.webp",
    alt: "BMW M3 GTR dalam koleksi",
  },
  {
    nama: "GTR R34",
    merek: "Nissan",
    tahun: 2002,
    jenis: "Sport",
    kategori: "Sport",
    gambar: "../assets/mobil3.webp",
    alt: "Nissan GTR R34 dalam koleksi",
  },
];

export const jumlahMobilBawaan = daftarMobil.length;
export const kunciMobilTersimpan = "mobil-tambahan-koleksi";

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
        .map(({ nama, merek, tahun, jenis, kategori }) => ({
          nama: nama.trim(),
          merek: merek.trim(),
          tahun,
          jenis: jenis.trim(),
          kategori: (kategori || jenis).trim(),
          gambar: "",
          alt: "",
        }))
    );
  }
} catch {
}

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

console.log("Hasil perkenalan:", buatPerkenalan(profil));
console.log("Hasil format keahlian:", formatKeahlian(profil.keahlian));

const namaMobil = daftarMobil.map((mobil) => mobil.nama);
const mobilSport = daftarMobil.filter((mobil) =>
  mobil.jenis.includes("Sport")
);
const gtr = daftarMobil.find((mobil) => mobil.nama === "GTR R34");
const urutTahun = [...daftarMobil].sort((a, b) => a.tahun - b.tahun);

console.table(profil.keahlian);
console.table(daftarMobil);
console.table(mobilSport);
console.log("Hasil find:", gtr);
console.log("Hasil map:", namaMobil);
console.table(urutTahun);

// Pemanggil lapisan data; penolakan diteruskan agar lapisan tampilan dapat
// menampilkan pesan galat kepada pengguna.
export async function ambilDataMobil() {
  try {
    return await ambilNotisia();
  } catch (galat) {
    console.error("Pemanggilan data mobil gagal:", galat.message);
    throw galat;
  }
}
