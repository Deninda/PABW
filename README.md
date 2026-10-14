# PABW — Koleksi Mobil Saya

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web.

## Pertemuan 3 — Halaman Profil Saya

Topik halaman saya: koleksi mobil saya.

- Judul halaman: Koleksi Mobil Saya
- Deskripsi: Halaman yang berisi koleksi mobil lengkap dengan merek, tahun, dan jenis mobil.
- Tautan navigasi: Koleksi Mobil, Tambah Mobil, Tentang Saya
- Dua bagian utama: Koleksi Mobil, Tambah Mobil
- Kolom tabel: Nama Mobil, Merek, Tahun, Jenis
- Kolom form: Nama Mobil, Merek Mobil, Tahun Mobil, Jenis Mobil
- Gambar: mobil1.webp, mobil2.webp, mobil3.webp

## Catatan penggunaan AI

Saya menggunakan AI sebagai bantuan dalam memahami struktur HTML5, membuat dan memperbaiki kode, serta menyusun halaman tugas. Saya tetap memeriksa dan menjalankan kode sendiri di VS Code dan browser.

## Pertemuan 4 — Design Token halaman profil

- Berkas gaya yang akan dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: #1769E0 (biru), dipilih karena sesuai dengan tema koleksi mobil dan memberikan tampilan yang modern serta mudah dibaca.

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #1769E0 | tombol, tautan, penanda |
| --color-fg | #0F172A | warna teks utama |
| --color-bg | #F4F7FB | latar halaman |
| --color-surface | #FFFFFF | latar kartu dan panel |
| --color-border | #D6DEE9 | garis dan tepi |
| --color-danger | #DC2626 | peringatan dan isian tidak sah |
| --color-focus | #38BDF8 | garis fokus keyboard |
| --radius-md | 0.5rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |

Kriteria selesai saya: mengubah --color-primary di satu baris harus mengubah warna tombol, tautan, judul, dan garis fokus.

## Pertemuan 5 — Layout Modern: Flexbox dan Grid

Halaman koleksi mobil dari Pertemuan 4 disusun ulang menggunakan CSS Grid untuk kerangka halaman dan Flexbox untuk komponen satu arah. Berkas P5 berada di folder whorksheetP5/.

- Kerangka halaman memakai tiga baris: header dan footer mengikuti isi, sedangkan area utama mengisi ruang yang tersisa (auto 1fr auto).
- Area isi memakai dua kolom (16rem 1fr) dengan area bernama sisi dan utama.
- Header, navigasi, daftar menu, footer, dan isi kartu menggunakan Flexbox dengan gap.
- Katalog kartu memakai Grid adaptif repeat(auto-fit, minmax(16rem, 1fr)); kartu pertama membentang dua kolom.
- Ukuran minimum kartu dan min-width: 0 membantu menjaga isi agar tidak meluber.
- Sketsa kerangka: header → sidebar (16rem) + konten (1fr) → footer.

## Pertemuan 6 — Responsif Mobile-First

Halaman koleksi mobil dari pertemuan sebelumnya disesuaikan agar nyaman digunakan di layar ponsel, tablet, dan desktop.

- Berkas responsif: `whorksheetP6/responsif.css`, ditautkan setelah berkas CSS lainnya.
- Meta viewport menggunakan lebar perangkat dan skala awal 1.0.
- Layout dasar memakai satu kolom untuk konten, katalog, dan galeri.
- Pada `48rem`, katalog dan galeri berubah menjadi dua kolom.
- Pada `60rem`, sidebar bersanding dengan konten dan katalog serta galeri menjadi tiga kolom.
- Gambar dibatasi agar tidak melampaui wadahnya. Gambar galeri memakai rasio 16:9 agar tampil seragam.
- `.table-wrap` menyediakan gulir horizontal untuk tabel lebar jika tabel ditambahkan.
- Konten panjang dibatasi agar tidak meluapkan kolom.

# Profil Koleksi Mobil — PABW Pertemuan 8

Proyek tugas praktikum **Pengembangan Aplikasi Berbasis Web (SIF302)** Pertemuan 8 mengenai penerapan JavaScript Modern (ES6+), Struktur Data, dan Array Methods pada halaman profil.

## Deskripsi Singkat
Halaman ini menampilkan profil dan koleksi mobil yang datanya dikelola sepenuhnya melalui JavaScript (`js/app.js`):
- Data profil dan koleksi mobil disimpan dalam variabel objek (`profil`) dan array of objects (`daftarMobil`).
- Menggunakan dua fungsi murni: `buatPerkenalan` dan `formatKeahlian`.
- Pengolahan data dinamis menggunakan array methods: `map` (render katalog), `filter` (kategori mobil sport), `find` (pencarian mobil), dan `sort` pada salinan array `[...daftarMobil]`.
- Dilengkapi fitur pengalih tema (Dark/Light mode) dengan `localStorage` dan form tambah data mobil.

## Pengungkapan Penggunaan AI

AI digunakan untuk menganalisis kode, menjelaskan temuan, dan membantu memperbaiki sebagian kode JavaScript, HTML, serta CSS pada proyek Pertemuan 8. Topik koleksi mobil dan data profil berasal dari saya. Saya bertanggung jawab memahami, memeriksa, dan menjelaskan kode yang saya serahkan.
## Riwayat Commit Git

Riwayat perubahan proyek dapat dilihat dengan perintah `git log --oneline`.

# Profil Koleksi Mobil - PABW Pertemuan 9

Halaman profil sederhana yang menampilkan koleksi mobil, filter kategori, form tambah mobil, penyimpanan lokal, dan pilihan tema.

## Menjalankan

Buka `html/profile.html` melalui server lokal agar modul JavaScript dapat dimuat dengan benar.

## Deklarasi bantuan AI

AI digunakan untuk meninjau kesesuaian implementasi dengan Worksheet P9, menambahkan status aksesibel pada tombol filter, dan menyusun README ini. Data profil, topik, dan implementasi awal halaman berasal dari pekerjaan pemilik proyek.

# Worksheet P10 — Koleksi Mobil Saya

Project ini melanjutkan website profil dari P9 dan menerapkan JavaScript asinkron (`fetch`, `async/await`, Promise, dan JSON).

## Menjalankan project
1. Buka folder `worksheetP10` di VS Code.
2. Jalankan halaman melalui server lokal (misalnya ekstensi Live Server), bukan dengan membuka `profile.html` melalui `file://`.
3. Buka `html/profile.html`.
4. Buka DevTools → Console dan Network untuk memeriksa status respons dan empat keadaan antarmuka.

## Sumber data
Project menggunakan `data/notisia.json` sebagai sumber data lokal, sesuai pilihan cadangan yang diperbolehkan worksheet jika API publik tidak dapat dijangkau atau tidak cocok dengan data halaman. Alamat ditetapkan satu kali di `js/api.js` pada konstanta `ALAMAT`. `fetch` hanya dipanggil di `js/api.js`; `js/dom.js` memanggil fungsi `ambilNotisia()` dan mengurus tampilan.

## JSON
- `respons.json()` membaca badan respons menjadi nilai JavaScript.
- `JSON.parse()` membaca data yang tersimpan di `localStorage` pada `js/app.js`.
- `JSON.stringify()` mengubah data mobil menjadi teks JSON sebelum disimpan ke `localStorage`.

## Deklarasi penggunaan AI
AI digunakan untuk membantu memahami instruksi worksheet, menyusun contoh implementasi `fetch`/`async`/`await`. Saya perlu membaca, menguji, dan memahami kode sendiri sebelum menyerahkan tugas. Pengujian aktual dan tangkapan layar harus diambil dari browser saya sendiri.

## Catatan
Berkas JSON lokal tetap membutuhkan server lokal agar `fetch` berjalan dengan benar. Jika data JSON diubah menjadi larik kosong, halaman menampilkan keadaan kosong; jika jalur salah, halaman menampilkan pesan gagal.
