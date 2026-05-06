// Data Statis untuk Daftar Buku
const daftarBukuPerpustakaan = [
    { id: 1, judul: "Matematika Kelas X", pengarang: "Kemendikbud", kategori: "pelajaran", rak: "A1", stok: 5 },
    { id: 2, judul: "Laskar Pelangi", pengarang: "Andrea Hirata", kategori: "novel", rak: "B2", stok: 3 },
    { id: 3, judul: "Algoritma Pemrograman", pengarang: "Sutrisno", kategori: "ilmiah", rak: "C1", stok: 10 },
    { id: 4, judul: "Sejarah Dunia", pengarang: "H.G. Wells", kategori: "referensi", rak: "D3", stok: 2 }
];

document.addEventListener('DOMContentLoaded', () => {
    const bookListContainer = document.querySelector('.book-list');
    const searchInput = document.getElementById('book-search');
    const categorySelect = document.getElementById('category-filter');

    // Fungsi untuk menampilkan buku ke halaman
    function renderBuku(bukuUntukDitampilkan) {
        if (!bookListContainer) return;
        
        bookListContainer.innerHTML = ''; // Kosongkan loading spinner

        if (bukuUntukDitampilkan.length === 0) {
            bookListContainer.innerHTML = '<p>Buku tidak ditemukan.</p>';
            return;
        }

        bukuUntukDitampilkan.forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-card';
            card.innerHTML = `
                <div class="book-cover">
                    <i class="fas fa-book" style="font-size: 50px; color: #3498db;"></i>
                </div>
                <div class="book-info">
                    <h3>${book.judul}</h3>
                    <p><strong>Pengarang:</strong> ${book.pengarang}</p>
                    <p><strong>Rak:</strong> ${book.rak} | <strong>Stok:</strong> ${book.stok}</p>
                    <span class="status-available">Tersedia</span>
                </div>
            `;
            bookListContainer.appendChild(card);
        });
    }

    // Fungsi Filter
    function jalankanFilter() {
        const keyword = searchInput ? searchInput.value.toLowerCase() : '';
        const kategori = categorySelect ? categorySelect.value : 'all';

        const hasil = daftarBukuPerpustakaan.filter(buku => {
            const cocokNama = buku.judul.toLowerCase().includes(keyword);
            const cocokKategori = kategori === 'all' || buku.kategori === kategori;
            return cocokNama && cocokKategori;
        });

        renderBuku(hasil);
    }

    // Pasang Event Listener
    if (searchInput) searchInput.addEventListener('input', jalankanFilter);
    if (categorySelect) categorySelect.addEventListener('change', jalankanFilter);

    // Tampilkan buku pertama kali saat halaman dibuka
    renderBuku(daftarBukuPerpustakaan);
});