document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil nilai dari form
    const namaTransaksi = document.getElementById('namaTransaksi').value;
    const jumlah = document.getElementById('jumlah').value;
    const kategori = document.getElementById('kategori').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Validasi form
    if (!namaTransaksi || !jumlah || !kategori) {
        errorMessage.textContent = 'Semua kolom harus diisi!';
        return;
    }
    
    // Buat elemen baris baru
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${namaTransaksi}</td>
        <td>${jumlah}</td>
        <td>${kategori}</td>
    `;
    
    // Tambahkan baris baru ke tabel
    document.getElementById('transactionTableBody').appendChild(newRow);
    
    // Reset form
    document.getElementById('transactionForm').reset();
    errorMessage.textContent = '';
});