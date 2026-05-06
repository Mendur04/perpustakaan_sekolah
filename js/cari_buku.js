// 1. Data Statis untuk pencarian (Bisa disamakan dengan data di daftar_buku.js)[cite: 25, 26]
const sumberDataBuku = [
    { id_buku: 1, judul: "Matematika Dasar", pengarang: "Budi Santoso", stok: 5 },
    { id_buku: 2, judul: "Laskar Pelangi", pengarang: "Andrea Hirata", stok: 3 },
    { id_buku: 3, judul: "Algoritma Pemrograman", pengarang: "Sutrisno", stok: 0 },
    { id_buku: 4, judul: "Bahasa Inggris", pengarang: "John Doe", stok: 10 },
    { id_buku: 5, judul: "Fisika Modern", pengarang: "Albert E.", stok: 2 },
    { id_buku: 6, judul: "Sejarah Indonesia", pengarang: "Moh. Yamin", stok: 4 }
];

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form'); 
    const searchInput = document.getElementById('search-input');
    const searchResultsDiv = document.querySelector('.search-results');

    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Mengambil kata kunci pencarian
            const query = searchInput.value.trim().toLowerCase();
            if (!query) return;

            // Proses pencarian pada data statis (pengganti API PHP)
            const hasilFilter = sumberDataBuku.filter(book => 
                book.judul.toLowerCase().includes(query) || 
                book.pengarang.toLowerCase().includes(query)
            );

            // Tampilkan hasil pencarian[cite: 28]
            displaySearchResults(hasilFilter);
        });
    }

    function displaySearchResults(books) {
        // Kosongkan hasil sebelumnya atau tampilkan pesan jika tidak ada[cite: 28]
        if (books.length === 0) {
            searchResultsDiv.innerHTML = '<p style="text-align:center; padding: 20px;">Buku tidak ditemukan.</p>';
            return;
        }

        searchResultsDiv.innerHTML = '';
        const ul = document.createElement('ul');
        ul.classList.add('book-list');

        books.forEach(book => {
            const li = document.createElement('li');
            li.classList.add('book-item');
            
            // Logika tampilan: jika stok 0, tombol pinjam dinonaktifkan[cite: 28]
            const tombolPinjam = book.stok > 0 ? 
                `<a href="pinjam_buku.html?bookId=${book.id_buku}" class="button primary-button">Pinjam</a>` : 
                '<span class="button disabled" style="background: #ccc; cursor: not-allowed;">Stok Habis</span>';

            li.innerHTML = `
                <div class="book-info">
                    <h3>${book.judul}</h3>
                    <p>Pengarang: ${book.pengarang}</p>
                    <p>Stok Tersedia: ${book.stok}</p>
                    ${tombolPinjam}
                </div>
            `;
            ul.appendChild(li);
        });
        
        searchResultsDiv.appendChild(ul);
    }
});