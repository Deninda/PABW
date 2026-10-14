// Lapisan data: alamat sumber ditetapkan di satu tempat.
const ALAMAT = "../data/notisia.json";

// Mengambil data koleksi mobil dari berkas JSON lokal.
export async function ambilNotisia() {
  try {
    const respons = await fetch(ALAMAT);
    console.log("status", respons.status, "ok", respons.ok);

    // fetch tidak otomatis menolak Promise untuk status 404 atau 500.
    if (!respons.ok) {
      throw new Error("status " + respons.status);
    }

    const data = await respons.json();

    // Pastikan bentuk data sesuai yang dibutuhkan halaman.
    if (!Array.isArray(data)) {
      throw new Error("Format JSON harus berupa larik mobil.");
    }

    return data;
  } catch (galat) {
    console.error("Gagal memuat data:", galat.message);
    throw galat;
  }
}
