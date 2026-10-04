// Salinan Bahasa Indonesia untuk situs (/id). Kuncinya sama persis dengan en.ts (diuji di
// tests/i18n.test.mjs). `{nama}` diisi oleh fmt().
import type { Dictionary } from './en'

export const id: Dictionary = {
  brand: {
    name: 'SMVentures',
    logoAlt: 'SMVC Venture Capital',
    home: 'Beranda SMVentures',
  },
  meta: {
    title: 'SMVentures — Venture Builder, Indonesia',
    description:
      'SMVentures adalah venture builder yang ikut membangun dan menjalankan perusahaan di industri-industri terpenting Indonesia: LegalTech, PropTech, ConTech, dan SaaS untuk perusahaan.',
    ogDescription:
      'Membangun perusahaan bersama di industri-industri terpenting Indonesia: LegalTech, PropTech, ConTech, dan SaaS untuk perusahaan.',
    shortDescription: 'Membangun perusahaan bersama di industri-industri terpenting Indonesia.',
  },
  language: {
    label: 'Bahasa',
    en: 'EN',
    id: 'ID',
    enName: 'EN, English',
    idName: 'ID, Bahasa Indonesia',
  },
  nav: {
    label: 'Utama',
    about: 'Tentang',
    portfolio: 'Portofolio',
    people: 'Tim',
    shareholders: 'Untuk pemegang saham',
    insights: 'Wawasan',
    login: 'Masuk sebagai Investor',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
  },
  footer: {
    tagline: 'Venture builder yang berbasis di Jakarta.',
    disclaimer: 'Tidak ada isi situs ini yang merupakan penawaran efek.',
    linksLabel: 'SMVentures di tempat lain',
    linkedin: 'LinkedIn',
    instagram: 'Instagram',
    privacy: 'Privasi',
    investorPortal: 'investor.smventures.id',
    copyright: '© {year} SMVentures · Jakarta, Indonesia',
  },
  numberWords: ['Nol', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan', 'Sepuluh'],
  home: {
    hero: {
      kicker: 'Venture builder · Jakarta',
      title: 'Kami membangun perusahaan bersama operator yang menjalankannya.',
      lead: 'SMVC mendirikan, mendanai, dan menjalankan bisnis teknologi untuk Indonesia, dan tetap turun tangan lama setelah peluncuran.',
      pitch: 'Ajukan ide Anda',
      seePortfolio: 'Lihat portofolio',
      statsLabel: 'SMVentures dalam angka',
    },
    stats: {
      ventures: 'venture aktif',
      firstCompany: 'perusahaan pertama dibangun',
      people: 'karyawan',
      industries: 'industri',
      handsOn: 'keterlibatan langsung',
      market: 'dibangun untuk Indonesia',
    },
    portfolio: {
      kicker: 'Portofolio',
      title: '{count} perusahaan, satu tim operasional.',
      readStory: 'Baca kisahnya →',
      readStoryOf: 'Baca kisah {name}',
    },
    approach: {
      kicker: 'Cara kami bekerja',
      title: 'Operator dulu, modal kemudian.',
      lead: 'Kami menempatkan orang di dalam perusahaan, bukan sekadar ikut rapat dewan sekali sekuartal.',
      steps: [
        {
          title: 'Membangun',
          text: 'Kami mendirikan perusahaan bersama seorang operator, menulis produk pertamanya, dan mendapatkan pelanggan pertamanya.',
        },
        {
          title: 'Mendanai',
          text: 'Kami mendanai putaran awal dan menerima pemegang saham lewat proses yang jelas dan tercatat.',
        },
        {
          title: 'Menjalankan',
          text: 'Tim keuangan, hukum, desain, dan engineering yang dipakai bersama menjaga setiap perusahaan tetap bergerak.',
        },
      ],
    },
    shareholders: {
      kicker: 'Untuk pemegang saham',
      title: 'Kepemilikan, dokumen, dan kabar Anda di satu tempat.',
      lead: 'Pemegang saham perusahaan SMVC memantau kepemilikan, kabar perusahaan, dividen, dan rapat umum pemegang saham di portal investor.',
      login: 'Masuk sebagai Investor',
      howItWorks: 'Cara kerja portal',
      note: 'Akses hanya lewat undangan, khusus untuk pemegang saham yang terdaftar.',
    },
  },
  shareholders: {
    metaTitle: 'Untuk pemegang saham',
    metaDescription:
      'Cara pemegang saham perusahaan SMVC melihat kepemilikan, dokumen, dividen, dan kabar perusahaan di portal investor yang hanya bisa diakses lewat undangan.',
    kicker: 'Untuk pemegang saham',
    title: 'Kepemilikan di perusahaan privat, dibuat jelas.',
    lead: 'Saham perusahaan privat tidak punya harga pasar. Kami menunjukkan apa yang Anda miliki, berapa nilai tercatatnya beserta dasarnya, dan apa yang terjadi selanjutnya.',
    login: 'Masuk sebagai Investor',
    contact: 'Hubungi relasi investor',
    stepsLabel: 'Cara kerjanya',
    steps: [
      {
        title: 'Anda tercatat sebagai pemegang saham',
        text: 'Setelah akta ditandatangani, kami mencatat saham Anda di daftar pemegang saham perusahaan.',
      },
      {
        title: 'Anda menerima undangan',
        text: 'Kami mengundang alamat email akun Google yang Anda pilih. Hanya alamat yang diundang yang bisa masuk.',
      },
      {
        title: 'Anda melihat apa yang Anda miliki',
        text: 'Jumlah saham, persentase, nilai tercatat beserta dasarnya, dividen, dan dokumen untuk setiap perusahaan.',
      },
      {
        title: 'Anda selalu mendapat kabar',
        text: 'Kabar perusahaan, rapat umum pemegang saham dan tanggal penting lain di agenda, serta pertanyaan ke manajemen, semuanya di satu tempat.',
      },
    ],
    faqKicker: 'Pertanyaan',
    faqTitle: 'Sebelum Anda masuk',
    faq: [
      {
        q: 'Apakah ini penawaran umum?',
        a: 'Bukan. Portal ini hanya untuk pemegang saham perusahaan SMVC yang sudah ada. Tidak ada isinya yang merupakan penawaran efek kepada publik.',
      },
      {
        q: 'Bagaimana cara masuk?',
        a: 'Buka halaman login dan masuk dengan Google memakai alamat yang kami undang. Sebelum melihat data apa pun, Anda diminta menyetujui kebijakan privasi dan ketentuan penggunaan portal.',
      },
      {
        q: 'Bagaimana nilai saham saya ditentukan?',
        a: 'Dari peristiwa tercatat terakhir di setiap perusahaan: putaran pendanaan, penilaian independen, nilai buku, atau estimasi internal. Portal selalu menunjukkan dasar mana yang dipakai dan kapan.',
      },
      {
        q: 'Di mana data saya disimpan?',
        a: 'Portal beserta database dan dokumennya di-hosting di Singapura. Login Google dan pengiriman email dapat memproses data di negara lain. Kebijakan privasi portal menjelaskan data apa yang kami simpan dan cara meminta salinan atau koreksinya.',
      },
      {
        q: 'Apakah orang lain bisa melihat kepemilikan saya?',
        a: 'Hanya Anda, kuasa yang tertaut ke akun investor Anda, dan tim SMVC sesuai perannya: admin, staf input data, dan auditor yang kami tunjuk (hanya membaca). Dokumen yang diunduh memuat nama orang yang mengunduhnya, dan setiap unduhan tercatat.',
      },
    ],
    privacyLink: 'Baca kebijakan privasi portal',
    disclaimer:
      'Tidak ada isi halaman ini yang merupakan penawaran efek. Portal investor hanya untuk pemegang saham terdaftar perusahaan SMVC.',
  },
  about: {
    metaTitle: 'Tentang',
    metaDescription:
      'SMVentures adalah venture builder yang ikut membangun dan menjalankan perusahaan di industri-industri terpenting Indonesia: LegalTech, PropTech, ConTech, dan SaaS untuk perusahaan.',
    howWeWork: {
      kicker: 'Cara kami bekerja',
      title: 'Lebih dari sekadar modal.',
      lead: 'Kebanyakan investor menyetor modal lalu menunggu. Kami hadir langsung: di produk, di organisasi, di ruang presentasi, dan di rapat dengan klien.',
      pillars: [
        {
          title: 'Saran & strategi',
          text: 'Desain model bisnis, strategi masuk pasar, dan positioning di tengah pesaing, dibentuk oleh pengalaman nyata sebagai operator, bukan teori.',
        },
        {
          title: 'Jaringan & akses',
          text: 'Perkenalan langsung ke klien korporat, regulator, mitra, dan talenta yang butuh bertahun-tahun untuk dijangkau sendiri.',
        },
        {
          title: 'Mitra operasional',
          text: 'Kami duduk sebagai managing partner, bukan hanya di dewan, tetapi juga di operasional sehari-hari saat perusahaan dibangun.',
        },
      ],
    },
    people: {
      kicker: 'Tim',
      title: 'Siapa di balik SMVentures.',
      lead: 'Seorang pendiri yang membangun, dan seorang penasihat yang sudah ikut membentuk lanskap teknologi Indonesia sejak internet belum dikenal luas.',
      linksLabel: '{name} di tempat lain',
    },
    comparison: {
      kicker: 'Venture builder vs VC',
      title: 'Apa yang membuat kami berbeda.',
      lead: 'Venture capital menyediakan modal. Venture builder menyediakan semua yang lain, bahkan lebih.',
      vcLabel: 'VC tradisional',
      vcTitle: 'Pasif sejak awal',
      vcItems: [
        'Hanya modal, laporan ke dewan tiap kuartal',
        'Pendiri mengurus operasional sendirian',
        'Akses jaringan untung-untungan',
        'Keluar begitu imbal hasil tercapai',
      ],
      ourLabel: 'SMVentures',
      ourTitle: 'Pembangun aktif',
      ourItems: [
        'Saran, strategi, dan dukungan eksekusi',
        'Managing partner terlibat di operasional',
        'Akses langsung ke ekosistem dan relasi',
        'Mitra membangun jangka panjang, bukan menunggu waktu keluar',
      ],
    },
    advantages: {
      kicker: 'Yang kami bawa',
      title: 'Keunggulan yang sulit ditandingi.',
      lead: 'Setiap venture di ekosistem kami mendapat akses langsung ke kemampuan ini sejak hari pertama.',
      items: [
        {
          title: 'Produk & engineering',
          text: 'Kepemimpinan teknis yang turun tangan langsung: strategi produk, arsitektur, dan eksekusi dari operator yang sudah pernah meluncurkan produk.',
        },
        {
          title: 'Jaringan korporat',
          text: 'Akses langsung ke pengambil keputusan di perusahaan, pemerintahan, dan lembaga keuangan di seluruh Indonesia.',
        },
        {
          title: 'Keahlian regulasi',
          text: 'Pemahaman mendalam tentang OJK, Kominfo, BSrE, dan lanskap regulasi yang sering menyandung para pendiri.',
        },
        {
          title: 'GTM untuk Indonesia',
          text: 'Strategi masuk pasar yang sudah teruji untuk segmen B2B, korporat, dan UMKM di pasar Indonesia.',
        },
      ],
    },
    lookingFor: {
      kicker: 'Dengan siapa kami membangun',
      title: 'Siapa yang kami cari.',
      lead: 'Kami selektif, bukan karena eksklusif, tetapi karena kami terlibat sepenuhnya. Kecocokannya harus pas bagi kedua pihak.',
      criteria: [
        {
          title: 'Fokus pada pasar Indonesia',
          text: 'Solusi yang dirancang untuk kebutuhan lokal, bukan salinan mentah dari resep negara Barat.',
        },
        {
          title: 'Pendiri yang berkomitmen',
          text: 'Bukan proyek sampingan. Kami mencari pendiri yang terjun sepenuhnya dan siap bekerja sama secara intensif.',
        },
        {
          title: 'Industri teregulasi atau B2B',
          text: 'LegalTech, FinTech, GovTech, atau SaaS untuk perusahaan, bidang tempat keunggulan kami paling besar.',
        },
        {
          title: 'Tahap pre-seed hingga seed',
          text: 'Kami paling efektif di tahap awal, saat keputusan-keputusan mendasar masih dibentuk.',
        },
      ],
    },
    cta: {
      title: 'Punya ide? Mari bicara.',
      text: 'Kami terbuka untuk obrolan awal, tanpa perlu pitch deck. Yang penting adalah ide yang kuat dan pendiri yang serius membangun sesuatu yang nyata di Indonesia.',
      button: 'Hubungi kami',
    },
  },
  insights: {
    metaTitle: 'Wawasan',
    metaDescription: 'Catatan dan artikel dari SMVentures, venture builder di Jakarta.',
    kicker: 'Wawasan',
    title: 'Wawasan',
    lead: 'Catatan dan artikel dari SMVentures.',
    back: 'Wawasan',
    draft: 'Draf',
    readMore: 'Baca →',
    readMoreOf: 'Baca “{title}”',
    rss: 'Umpan RSS',
    homeTitle: 'Terbaru dari SMVentures',
    all: 'Semua tulisan',
    feedTitle: 'Wawasan SMVentures',
  },
  privacy: {
    metaTitle: 'Kebijakan privasi',
    metaDescription: 'Cara SMVentures menangani data pribadi yang Anda kirim lewat formulir kontak di smventures.id, dan cara situs ini memakai Google Analytics.',
    kicker: 'Privasi',
    title: 'Kebijakan privasi',
    updated: 'Terakhir diperbarui {date}',
    draft: 'DRAF — perlu ditinjau',
    draftNote: 'Kebijakan ini masih draf dan belum ditinjau oleh konsultan hukum.',
    controller: 'SMVentures',
    who: {
      title: 'Siapa kami',
      text: '{controller} (“kami”) mengelola smventures.id dan menentukan cara data pribadi yang dijelaskan di sini digunakan. Kami mengacu pada Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (“UU PDP”).',
    },
    collect: {
      title: 'Data yang dikumpulkan formulir kontak',
      intro: 'Saat Anda mengirim formulir kontak, kami menerima:',
      items: [
        'nama Anda;',
        'alamat email Anda, agar kami bisa membalas;',
        'nama organisasi Anda, bila Anda mengisinya;',
        'topik pesan Anda (mengajukan ide, kemitraan, investasi, atau hal lain);',
        'isi pesan Anda.',
      ],
      technical:
        'Untuk mencegah banjir pesan, server menghitung jumlah pesan per alamat internet (IP). Hitungan itu hanya disimpan di memori kerja server, tidak ditulis ke penyimpanan atau log, dan hilang saat server dimulai ulang. Bila pengiriman gagal, log galat kami hanya mencatat bahwa pengiriman gagal, tanpa isi pesan atau data Anda.',
    },
    purpose: {
      title: 'Untuk apa data itu dipakai',
      text: 'Data yang Anda kirim hanya kami pakai untuk membaca pesan Anda, membalasnya, dan menindaklanjuti permintaan Anda. Kami tidak menjualnya dan tidak memasukkan Anda ke milis.',
    },
    processors: {
      title: 'Siapa yang memprosesnya untuk kami',
      items: [
        'Resend mengantarkan isi formulir ke kotak masuk email kami, dengan alamat Anda sebagai alamat balasan.',
        'Vercel menjadi tempat situs ini berjalan, termasuk formulirnya.',
        'Google menyediakan Google Analytics (lihat di bawah).',
      ],
      transfer: 'Penyedia ini dapat memproses data di luar Indonesia, misalnya di Amerika Serikat.',
    },
    retention: {
      title: 'Berapa lama data disimpan',
      items: [
        'Pesan Anda tersimpan di kotak masuk email kami selama masih diperlukan untuk menangani permintaan Anda dan tindak lanjutnya, lalu dihapus.',
        'Hitungan per alamat IP hanya ada selama masih tersimpan di memori server.',
        'Penyedia layanan kami menyimpan catatan pengiriman dan permintaan mereka sendiri untuk waktu terbatas sesuai ketentuan mereka.',
      ],
    },
    analytics: {
      title: 'Google Analytics',
      text: 'Kami memakai Google Analytics untuk melihat cara situs ini digunakan: halaman yang dibuka, perkiraan lokasi pengunjung, perangkat dan peramban yang dipakai, serta dari mana pengunjung datang. Google Analytics menyimpan cookie di peramban Anda, dan Google memproses data ini, mungkin di luar Indonesia. Anda bisa memblokir cookie ini lewat pengaturan peramban, atau memasang pengaya penolakan dari Google.',
      optOut: 'Pengaya penolakan Google Analytics',
    },
    rights: {
      title: 'Hak Anda',
      intro: 'Menurut UU PDP, Anda berhak antara lain untuk:',
      items: [
        'mendapat informasi tentang cara data pribadi Anda diproses;',
        'melihat data pribadi Anda dan mendapatkan salinannya;',
        'meminta perbaikan data yang tidak akurat atau tidak lengkap;',
        'meminta penghapusan data, kecuali yang wajib kami simpan menurut hukum;',
        'menarik persetujuan kapan saja;',
        'meminta penundaan atau pembatasan pemrosesan;',
        'menerima data Anda dalam format yang umum dipakai;',
        'mengajukan keberatan, dan menuntut ganti rugi atas pelanggaran pemrosesan data Anda.',
      ],
    },
    contact: {
      title: 'Cara menghubungi kami soal data Anda',
      withEmail: 'Kirim email ke {email}, sebaiknya dari alamat yang Anda pakai saat menghubungi kami. Kami dapat meminta Anda memastikan identitas sebelum menindaklanjuti permintaan.',
      withoutEmail: 'Kirim pesan lewat formulir kontak, pilih “Hal lain”, dan tuliskan apa yang Anda minta. Kami dapat meminta Anda memastikan identitas sebelum menindaklanjuti permintaan.',
      button: 'Buka formulir kontak',
    },
    portal: {
      title: 'Portal investor',
      text: 'Portal investor di investor.smventures.id punya kebijakan privasi sendiri yang mengatur data pemegang saham.',
      link: 'Baca kebijakan privasi portal investor',
    },
    changes: {
      title: 'Perubahan',
      text: 'Bila kebijakan ini berubah, kami memperbarui halaman ini dan tanggal di bagian atasnya.',
    },
    consent: 'Dengan mengirim formulir ini, Anda setuju data Anda kami pakai untuk membalas, sesuai {link} kami.',
    consentLink: 'kebijakan privasi',
  },
  venture: {
    metaTitle: '{name} — portofolio SMVentures',
    back: 'Portofolio',
    visit: 'Kunjungi {domain}',
    factsLabel: 'Fakta utama',
    founded: 'Berdiri',
    sector: 'Sektor',
    products: 'Produk',
    basedIn: 'Berbasis di',
    smvcRole: 'Peran SMVC',
    website: 'Situs web',
    focusLabel: 'Cakupan',
    storyLabel: 'Kisahnya',
    problem: 'Masalahnya',
    built: 'Yang kami bangun',
    now: 'Posisinya sekarang',
  },
  notFound: {
    metaTitle: 'Halaman tidak ditemukan',
    kicker: '404',
    title: 'Halaman itu tidak kami temukan.',
    lead: 'Alamatnya mungkin salah ketik, atau halamannya sudah pindah.',
    home: 'Kembali ke beranda',
  },
  contact: {
    title: 'Mari bicara',
    intro: 'Ceritakan sedikit tentang Anda dan apa yang ingin Anda sampaikan. Tidak perlu pitch deck.',
    close: 'Tutup',
    name: 'Nama',
    email: 'Email',
    organisation: 'Organisasi',
    optional: '(opsional)',
    kind: 'Pesan ini tentang apa?',
    chooseOne: 'Pilih salah satu',
    kinds: {
      pitch: 'Mengajukan ide',
      partnership: 'Kemitraan',
      investor: 'Investor',
      other: 'Hal lain',
    },
    message: 'Pesan',
    website: 'Situs web',
    send: 'Kirim pesan',
    sending: 'Mengirim…',
    openLinkedIn: 'Buka LinkedIn',
    messages: {
      sent: 'Terima kasih, pesan Anda sudah terkirim. Kami akan membalas lewat email.',
      notConfigured:
        'Formulir kontak kami belum aktif, jadi pesan Anda belum terkirim. Silakan hubungi kami lewat LinkedIn (tautannya ada di bagian bawah halaman). Pesan Anda masih ada di sini untuk disalin.',
      failed:
        'Maaf, pesan Anda belum bisa terkirim. Coba lagi beberapa menit lagi, atau hubungi kami lewat LinkedIn (tautannya ada di bagian bawah halaman).',
      rateLimited: 'Terlalu banyak pesan dalam waktu singkat. Tunggu sekitar {seconds} detik, lalu coba lagi. Pesan Anda masih ada di sini.',
      invalid: 'Periksa kembali kolom yang ditandai.',
    },
    errors: {
      name: 'Tulis nama Anda, paling banyak 100 karakter.',
      email: 'Alamat email ini sepertinya belum benar.',
      organisation: 'Nama organisasi paling banyak 150 karakter.',
      kind: 'Pilih topik pesan Anda.',
      message: 'Tulis pesan antara 10 dan 5.000 karakter.',
    },
  },
}
