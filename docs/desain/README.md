# Desain situs smventures.id

Disetujui Sandi pada 1 Okt 2026 (DS-3), satu bahasa visual dengan portal investor.smventures.id. Salinan statis mockup ada di `layar/`; buka langsung di browser. Kode tugas sama dengan Papan Antrean SMVentures.

Teks dalam kurung siku `[ … ]` di mockup adalah isian yang belum ada, bukan salinan untuk situs. Fakta di mockup (tahun berdiri, daftar produk, lokasi, jumlah orang, peran SMVC) **belum tentu benar**: pakai hanya yang sudah ada di situs sekarang atau yang diisi Sandi.

## Peta halaman

| Berkas | Tugas | Rute (EN) | Rute (ID) |
|---|---|---|---|
| `Situs-Beranda.html` | WS-1 | `/` | `/id` |
| `Situs-Investor.html` | WS-2 | `/for-shareholders` | `/id/for-shareholders` |
| `Situs-Venture.html` | WS-3 | `/portfolio/[slug]` | `/id/portfolio/[slug]` |
| (tanpa mockup) | WS-4 | `/about` | `/id/about` |
| (tanpa mockup) | WS-5 | `/insights`, `/insights/[slug]` | `/id/insights…` |
| (tanpa mockup) | WS-8 | `/privacy` | `/id/privacy` |
| `Sistem-Desain.html` | DS-1 | acuan | |

## Token

Sama dengan portal:

| Nama | Hex | Pakai untuk |
|---|---|---|
| Hutan | `#04342C` | Latar hero dan pita "For shareholders" |
| Hijau SMVC | `#0E8F6A` | Aksen |
| Hijau tindakan | `#0A6650` | Tombol utama, tautan |
| Mint | `#E1F5EE` | Pilihan aktif, pill |
| Mint gelap di atas Hutan | `#80D4B8`, `#A9C9BE` | Label dan teks kedua di latar gelap |
| Tinta | `#13201C` | Teks utama |
| Teks kedua | `#45554F` | Nav, isi sekunder |
| Lumut | `#5A6B64` | Keterangan, footer |
| Kertas | `#F3F5F2` | Latar bagian berselang |
| Permukaan | `#FFFFFF` | Latar utama, kartu |
| Permukaan redup | `#F8FAF7` | Kartu sekunder |
| Garis | `#DFE5DF` | Batas kartu |

Pill status: `ok` `#E1F5EE`/`#0A6650`, `info` `#E6EDF8`/`#2A55A0`, `warn` `#FBEFDC`/`#8A4A0C`, `mute` `#ECEFEC`/`#45554F`. Tile venture memakai logo yang ada di `public/images/`; inisial berwarna hanya bila logo tidak ada.

## Tipografi dan tata letak

- Plus Jakarta Sans 400–800 untuk semua teks, IBM Plex Mono 400–600 untuk angka dan data kecil, lewat `next/font/google`.
- Display hero 52–64px 800, tracking −0,03em; judul bagian 34px 800; isi 16–17px/1,6.
- Kontainer 1240px, padding samping 40px (16px di HP). Radius kartu 16px, tombol 10px. Target sentuh minimal 44px.
- Ikon: SVG garis 24×24, `stroke-width` 2, ditulis langsung (tanpa webfont ikon dari CDN).

## Aturan isi

- Bahasa utama Inggris; Bahasa Indonesia di `/id`. Keduanya dari kamus pesan yang sama, tanpa teks tertanam di komponen.
- Setiap bagian yang isinya belum ada **tidak dirender**. Tidak ada placeholder yang tayang ke publik.
- Angka statistik dihitung dari data (jumlah venture) atau diambil dari situs sekarang. "[n] people employed" baru tampil bila Sandi mengisinya.
- Kaki halaman selalu memuat "Nothing on this site is an offer of securities." / "Tidak ada isi situs ini yang merupakan penawaran efek."
- Tidak memakai kata "harga saham" dan tidak menampilkan valuasi atau angka keuangan venture.
- "Login as Investor" selalu menuju https://investor.smventures.id/login.
- **Sahamku** tidak ditampilkan (WS-9 belum diputuskan): datanya tetap ada dengan `listed: false`, jadi bisa dimunculkan lagi dengan mengubah satu nilai.
