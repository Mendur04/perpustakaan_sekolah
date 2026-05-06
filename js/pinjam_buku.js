document.addEventListener('DOMContentLoaded', () => {
    const selectBuku = document.getElementById('book-to-borrow');
    const borrowForm = document.getElementById('borrow-form');

    // Mengambil data dari data statis (bisa dibuat file data.js terpisah agar rapi)
    const dataBukuTersedia = [
        { id: 1, judul: "Matematika Kelas X" },
        { id: 2, judul: "Laskar Pelangi" },
        { id: 3, judul: "Algoritma Pemrograman" },
        { id: 4, judul: "Sejarah Dunia" }
    ];

    // Isi dropdown secara otomatis
    dataBukuTersedia.forEach(book => {
        const option = document.createElement('option');
        option.value = book.id;
        option.textContent = book.judul;
        selectBuku.appendChild(option);
    });

    if (borrowForm) {
        borrowForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Karena statis, kita hanya tampilkan notifikasi tanpa simpan ke DB
            if (typeof showNotification !== 'undefined') {
                showNotification('Buku berhasil dipinjam (jangan sampai rusak!)', 'success');
            }
        });
    }
});