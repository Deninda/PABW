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
