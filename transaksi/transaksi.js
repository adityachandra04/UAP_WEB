// Data barang
const barang = [
    { kode: '001', nama: 'A', harga: 10000 },
    { kode: '002', nama: 'B', harga: 20000 },
    { kode: '003', nama: 'C', harga: 30000 }
  ];
  
  // Fungsi untuk menghitung total harga
  function hitungTotal() {
    const kode = document.getElementById('kode').value;
    const jumlah = parseInt(document.getElementById('jumlah').value);
  
    const produk = barang.find(item => item.kode === kode);
    if (!produk) {
      alert('Kode barang tidak valid!');
      return;
    }
  
    const totalHarga = produk.harga * jumlah;
    alert(`Total yang harus dibayar: Rp${totalHarga}`);
  
    // Menghitung kembalian
    const uangDibayar = prompt('Masukkan jumlah uang yang dibayarkan:');
    if (uangDibayar === null || uangDibayar === '') {
      return;
    }
  
    const kembalian = parseInt(uangDibayar) - totalHarga;
    if (kembalian >= 0) {
      alert(`Kembalian: Rp${kembalian}`);
    } else {
      alert('Maaf, uang yang dibayarkan kurang.');
    }
  }
  