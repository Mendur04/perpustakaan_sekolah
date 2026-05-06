// 1. Data Statis simulasi buku yang sedang dipinjam[cite: 26, 30]
const dataPeminjamanAktif = [
    { id_peminjaman: "1", id_anggota: "NIS001", judul_buku: "Fisika Modern", tanggal_kembali: "2026-05-10" },
    { id_peminjaman: "2", id_anggota: "NIS005", judul_buku: "Sejarah Indonesia", tanggal_kembali: "2026-05-12" },
    { id_peminjaman: "3", id_anggota: "NIS001", judul_buku: "Matematika Dasar", tanggal_kembali: "2026-05-08" }
];

document.addEventListener('DOMContentLoaded', function() {
    const returnBookSelect = document.getElementById('return-book');
    const studentIdInput = document.getElementById('return-student-id');
    const returnForm = document.getElementById('return-form');
    const container = document.getElementById('return-borrow-details');

    // Inisialisasi: Isi dropdown buku dengan data statis
    if (returnBookSelect) {
        dataPeminjamanAktif.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id_peminjaman;
            option.textContent = `${item.judul_buku} (Peminjam: ${item.id_anggota})`;
            returnBookSelect.appendChild(option);
        });
    }

    // Event Listeners
    if (returnBookSelect) returnBookSelect.addEventListener('change', updateBorrowDetails);
    if (studentIdInput) studentIdInput.addEventListener('input', updateBorrowDetails);
    if (returnForm) returnForm.addEventListener('submit', handleReturnSubmit);

    // Fungsi untuk menampilkan detail peminjaman secara statis
    function updateBorrowDetails() {
        const bookId = returnBookSelect.value;
        const studentId = studentIdInput.value.trim();
        
        if (!bookId || !studentId) {
            container.innerHTML = '<p>Silakan pilih buku dan masukkan ID Anggota untuk melihat detail.</p>';
            return;
        }

        // Cari data di variabel statis
        const data = dataPeminjamanAktif.find(item => 
            item.id_peminjaman === bookId && item.id_anggota === studentId
        );

        if (data) {
            container.innerHTML = `
                <div class="details-box" style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 5px solid #2ecc71;">
                    <h3 style="margin-top:0;">${data.judul_buku}</h3>
                    <p><strong>ID Anggota:</strong> ${data.id_anggota}</p>
                    <p><strong>Jatuh Tempo:</strong> <span style="color: #e74c3c;">${data.tanggal_kembali}</span></p>
                </div>`;
        } else {
            container.innerHTML = '<p style="color: #e74c3c;">Data peminjaman tidak ditemukan untuk ID Anggota ini.</p>';
        }
    }

    // Fungsi untuk menangani submit form secara statis[cite: 30]
    function handleReturnSubmit(e) {
        e.preventDefault();
        
        const bookId = returnBookSelect.value;
        const studentId = studentIdInput.value;

        if (!bookId || !studentId) {
            if (typeof showNotification !== 'undefined') {
                showNotification('Lengkapi data pengembalian!', 'error');
            }
            return;
        }

        // Simulasi berhasil (karena statis, data tidak benar-benar terhapus di file)[cite: 30]
        if (typeof showNotification !== 'undefined') {
            showNotification('Buku berhasil dikembalikan (Terima Kasih)!', 'success');
        }

        // Reset form setelah sukses
        setTimeout(() => {
            returnForm.reset();
            container.innerHTML = '';
            window.location.reload();
        }, 1500);
    }
});