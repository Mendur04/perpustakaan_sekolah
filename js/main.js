// 1. Data Pengganti Database (Statis)[cite: 26]
const dataPerpustakaan = {
    totalBuku: 120,
    tersedia: 85,
    dipinjam: 35,
    daftarTersedia: [
        { id: 1, judul: "Matematika Dasar", pengarang: "Budi Santoso" },
        { id: 2, judul: "Laskar Pelangi", pengarang: "Andrea Hirata" },
        { id: 3, judul: "Algoritma Pemrograman", pengarang: "Sutrisno" },
        { id: 4, judul: "Bahasa Inggris", pengarang: "John Doe" }
    ],
    daftarDipinjam: [
        { judul_buku: "Fisika Modern", id_anggota: "NIS001" },
        { judul_buku: "Sejarah Indonesia", id_anggota: "NIS005" }
    ]
};

// 2. Fungsi untuk Mengisi Data ke Halaman
function updateDashboardStatis() {
    // Ambil elemen statistik[cite: 26]
    const totalEl = document.getElementById('total-books');
    const tersediaEl = document.getElementById('available-books-count');
    const dipinjamEl = document.getElementById('borrowed-books-count');
    
    // Ambil elemen daftar[cite: 26]
    const listTersediaEl = document.getElementById('available-books-list');
    const listDipinjamEl = document.getElementById('borrowed-books-list');
    
    // Sembunyikan loading spinner[cite: 26]
    const availableLoading = document.getElementById('available-books-loading');
    const borrowedLoading = document.getElementById('borrowed-books-loading');
    if (availableLoading) availableLoading.style.display = 'none';
    if (borrowedLoading) borrowedLoading.style.display = 'none';

    // Isi angka statistik[cite: 26]
    if (totalEl) totalEl.textContent = dataPerpustakaan.totalBuku;
    if (tersediaEl) tersediaEl.textContent = dataPerpustakaan.tersedia;
    if (dipinjamEl) dipinjamEl.textContent = dataPerpustakaan.dipinjam;

    // Isi daftar buku tersedia[cite: 26]
    if (listTersediaEl) {
        listTersediaEl.innerHTML = dataPerpustakaan.daftarTersedia
            .map(book => `<li><i class="fas fa-check-circle" style="color: #2ecc71;"></i> ${book.judul}</li>`)
            .join('');
    }

    // Isi daftar buku dipinjam[cite: 26]
    if (listDipinjamEl) {
        listDipinjamEl.innerHTML = dataPerpustakaan.daftarDipinjam
            .map(borrow => `<li><i class="fas fa-user-clock" style="color: #e67e22;"></i> ${borrow.judul_buku} (Oleh: ${borrow.id_anggota})</li>`)
            .join('');
    }
}

// 3. Jalankan fungsi saat halaman selesai dimuat[cite: 25, 26]
document.addEventListener('DOMContentLoaded', () => {
    updateDashboardStatis();
});