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
AI digunakan untuk membantu memahami instruksi worksheet, menyusun contoh implementasi `fetch`/`async`/`await`, penanganan galat, serta merapikan jawaban worksheet. Saya perlu membaca, menguji, dan memahami kode sendiri sebelum menyerahkan tugas. Pengujian aktual dan tangkapan layar harus diambil dari browser saya sendiri.

## Catatan
Berkas JSON lokal tetap membutuhkan server lokal agar `fetch` berjalan dengan benar. Jika data JSON diubah menjadi larik kosong, halaman menampilkan keadaan kosong; jika jalur salah, halaman menampilkan pesan gagal.
