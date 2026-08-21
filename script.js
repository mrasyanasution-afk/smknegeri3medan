/* --- MENU MOBILE --- */
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
        let icon = mobileMenu.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });
}

/* --- DETEKSI MENU AKTIF BERDASARKAN HALAMAN (Pemisahan File) --- */
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.classList.remove('active');
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
        link.classList.add('active');
    }
});

/* --- DATABASE MATERI PEMBELAJARAN JURUSAN --- */
const dataMateri = {
    ki: {
        title: "Kimia Industri (KI)",
        10: { 
            sem1: ["Pengenalan Ilmu Kimia & Keselamatan Kerja", "Struktur Atom & Sistem Periodik", "Ikatan Kimia", "Hukum Dasar Kimia & Stoikiometri"], 
            sem2: ["Bentuk Molekul & Interaksi Antar Molekul", "Larutan Elektrolit & Non-Elektrolit", "Reaksi Reduksi-Oksidasi (Redoks)", "Tata Nama Senyawa"] 
        },
        11: { 
            sem1: ["Termokimia & Perubahan Entalpi", "Laju Reaksi & Faktor Pengaruhnya", "Kesetimbangan Kimia", "Konsep Asam Basa"], 
            sem2: ["Stoikiometri Larutan", "Sistem Koloid & Sifatnya", "Hidrokarbon & Minyak Bumi", "Dasar Mikrobiologi Industri"] 
        },
        12: { 
            sem1: ["Sifat Koligatif Larutan", "Redoks Lanjut & Elektrokimia", "Kimia Unsur (Golongan Utama & Transisi)", "Pengolahan Air & Limbah Industri"], 
            sem2: ["Senyawa Karbon Turunan Alkana", "Polimer & Makromolekul", "Operasi Teknik Kimia Dasar", "Kewirausahaan Produk Kimia"] 
        }
    },
    apl: {
        title: "Analisis Pengujian Laboratorium (APL)",
        10: {
            sem1: ["K3LH di Laboratorium", "Pengenalan Alat & Bahan Kimia", "Analisis Fisika Non Instrumen (AFNI)", "Penyiapan Larutan Standar"],
            sem2: ["Teknik Dasar Laboratorium", "Penanganan Sampel", "Analisis Gravimetri Dasar", "Titrimetri/Volumetri (Asam Basa)"]
        },
        11: {
            sem1: ["Analisis Titrimetri Lanjut (Redoks, Kompleksi)", "Analisis Elektrokimia (pH meter, Konduktometer)", "Spektrofotometri UV-Vis", "Analisis Mikrobiologi Dasar"],
            sem2: ["Kromatografi Dasar (Kertas, Lapis Tipis)", "Analisis Proksimat (Kadar Air, Abu, Lemak, Protein)", "Teknik Pemisahan Bahan", "Pengujian Kualitas Air"]
        },
        12: {
            sem1: ["Analisis Instrumental Lanjut (AAS, GC, HPLC)", "Validasi Metode Analisis", "Jaminan Mutu Laboratorium (ISO/IEC 17025)", "Analisis Obat & Kosmetik"],
            sem2: ["Manajemen Laboratorium", "Pengolahan Limbah Laboratorium", "Proyek Analisis Terpadu", "Produk Kreatif & Kewirausahaan APL"]
        }
    },
    fkk: {
        title: "Farmasi Klinis Komunitas (FKK)",
        10: {
            sem1: ["Dasar-Dasar Kefarmasian", "K3LH di Bidang Farmasi", "Pengenalan Bentuk Sediaan Obat", "Botani Farmasi (Anatomi Tumbuhan)"],
            sem2: ["Pembuatan Sediaan Padat (Serbuk, Kapsul)", "Penggolongan Obat Terbatas & Bebas", "Farmakognosi Dasar (Simplisia)", "Perhitungan Dosis Dasar"]
        },
        11: {
            sem1: ["Pelayanan Farmasi dengan Resep Dokter", "Pembuatan Sediaan Cair & Semi Padat (Sirup, Salep)", "Farmakologi Dasar", "Penyakit Simtomatis & Causal"],
            sem2: ["Komunikasi, Informasi, & Edukasi (KIE) Obat", "Administrasi & Pengelolaan Apotek", "Farmakognosi (Ekstraksi & Galenika)", "Pengujian Sediaan Obat"]
        },
        12: {
            sem1: ["Simulasi Pelayanan Apotek & Rumah Sakit", "Pengelolaan Narkotika & Psikotropika", "Farmasi Klinis Terapan", "Obat Tradisional & Fitofarmaka"],
            sem2: ["Kalkulasi Harga Obat & Biaya Resep", "Manajemen Pemasaran Obat", "Ujian Kompetensi Keahlian Farmasi", "Kewirausahaan Farmasi"]
        }
    },
    tlm: {
        title: "Teknik Laboratorium Medik (TLM)",
        10: {
            sem1: ["Pengantar Laboratorium Medik", "Anatomi Fisiologi Manusia", "K3 di Laboratorium Kesehatan", "Penggunaan & Perawatan Mikroskop"],
            sem2: ["Biologi Sel & Molekuler", "Teknik Pengambilan Spesimen (Darah, Urin)", "Penanganan & Penyimpanan Sampel", "Etika Profesi Tenaga Kesehatan"]
        },
        11: {
            sem1: ["Hematologi Dasar (Pemeriksaan Darah Rutin)", "Bakteriologi Dasar (Pembuatan Media & Pewarnaan)", "Parasitologi (Protozoa & Helmintologi)", "Pra-analitik, Analitik & Pasca-analitik"],
            sem2: ["Urinalisis & Pemeriksaan Cairan Tubuh", "Imuno-Serologi Dasar", "Kimia Klinik Dasar (Glukosa, Kolesterol)", "Manajemen Mutu Laboratorium"]
        },
        12: {
            sem1: ["Hematologi Lanjut (Kelainan Darah)", "Bakteriologi Lanjut (Kultur & Uji Resistensi)", "Kimia Klinik Lanjut (Fungsi Hati & Ginjal)", "Sitohistoteknologi (Pembuatan Preparat Jaringan)"],
            sem2: ["Sistem Informasi Laboratorium Medik", "Evaluasi Kesalahan Pemeriksaan Lab", "Simulasi Pemeriksaan Terpadu", "Kewirausahaan Laboratorium Kesehatan"]
        }
    },
    rpl: {
        title: "Rekayasa Perangkat Lunak (RPL)",
        10: {
            sem1: ["Berpikir Komputasional & Logika", "Algoritma Pemrograman Dasar", "Pengenalan Struktur HTML5 & CSS3", "Sistem Komputer & Jaringan Dasar"],
            sem2: ["Dasar Pemrograman JavaScript", "Desain Antarmuka Web Interaktif", "Pengenalan Basis Data Dasar", "Desain Grafis untuk UI/UX"]
        },
        11: {
            sem1: ["Pemrograman Berorientasi Objek (OOP)", "Sistem Basis Data Lanjut (SQL & Relasi)", "Pemrograman Web Dinamis (PHP/NodeJS)", "Manajemen Proyek Perangkat Lunak (Agile/Scrum)"],
            sem2: ["Pengembangan Aplikasi Berbasis Framework (React/Laravel)", "Desain & Implementasi UI/UX Modern", "Penggunaan Git & Version Control", "Keamanan Web & Enkripsi Data"]
        },
        12: {
            sem1: ["Pengembangan Aplikasi Mobile (Android/iOS)", "Integrasi API (Application Programming Interface)", "Cloud Computing & Web Hosting", "Testing & Quality Assurance Software"],
            sem2: ["Proyek Akhir Penciptaan Aplikasi (Capstone)", "Deployment Aplikasi ke Playstore/Server", "Tren Teknologi (AI Dasar/IoT)", "Technopreneurship & Startup Digital"]
        }
    }
};

/* --- LOGIKA MODAL MATERI --- */
let jurusanAktif = '';
const modal = document.getElementById('modalMateri');
const modalTitle = document.getElementById('modalTitle');
const listSem1 = document.getElementById('listSem1');
const listSem2 = document.getElementById('listSem2');
const tabBtns = document.querySelectorAll('.tab-btn');

function bukaModal(kodeJurusan) {
    if (!modal) return; // Mencegah error jika fungsi dipanggil di luar halaman jurusan
    jurusanAktif = kodeJurusan;
    modalTitle.innerHTML = `<i class="fa-solid fa-book-open"></i> Materi ${dataMateri[kodeJurusan].title}`;
    modal.classList.add('active');
    gantiTab(10); 
    document.body.style.overflow = 'hidden';
}

function tutupModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function gantiTab(kelas) {
    if (!modal) return;
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent.includes(kelas)) {
            btn.classList.add('active');
        }
    });

    const materiSem1 = dataMateri[jurusanAktif][kelas].sem1;
    const materiSem2 = dataMateri[jurusanAktif][kelas].sem2;

    listSem1.innerHTML = '';
    materiSem1.forEach(item => {
        listSem1.innerHTML += `<li>${item}</li>`;
    });

    listSem2.innerHTML = '';
    materiSem2.forEach(item => {
        listSem2.innerHTML += `<li>${item}</li>`;
    });

    const kontainer = document.getElementById('kontenMateri');
    kontainer.style.animation = 'none';
    setTimeout(() => kontainer.style.animation = 'fadeIn 0.4s ease forwards', 10);
}

if (modal) {
    modal.addEventListener('click', function(e) {
        if(e.target === modal) {
            tutupModal();
        }
    });
}

/* --- FITUR SCROLL REVEAL (ANIMASI) --- */
const revealElements = document.querySelectorAll('.reveal');
const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); 
            observer.unobserve(entry.target);
        }
    });
}, { root: null, threshold: 0.15, rootMargin: "0px" });

revealElements.forEach(el => scrollObserver.observe(el));