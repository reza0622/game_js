var playAgain = true;
while (playAgain) {
  // Membuat angka acak antara 1 dan 10
  var angka = Math.floor(Math.random() * 10) + 1;

  // Membuat pengulangan hanya 3 kali
  for (var i = 0; i < 3; i++) {
    var p = prompt('Tebak angka 1-10, berapa angkanya?');

    if (p == angka) {
      alert('Selamat! Tebakanmu benar. Angka yang benar adalah ' + angka + '. Kamu berhasil menebak dalam ' + (i + 1) + ' percobaan.');
      // Keluar dari loop jika tebakan benar
      break;
    } else if (p < angka) {
      alert('Tebakanmu terlalu rendah. tebak kembali, kesempatanmu masih ada ' + (2 - i) + ' kali lagi.');
    } else if (p > angka) {
      alert('Tebakanmu terlalu tinggi. tebak kembali, kesempatanmu masih ada ' + (2 - i) + ' kali lagi.');
    } else {
      alert('Input tidak valid. Silakan masukkan angka antara 1 hingga 10. tebak kembali, kesempatanmu masih ada ' + (2 - i) + ' kali lagi.');
    }
    // Jika sudah 3 kali percobaan dan tebakan masih salah
    if (i === 2) {
      alert('GAME OVER!!!, tebakanmu salah. Angka yang benar adalah ' + angka + '.');
      break; // Keluar dari loop jika sudah 3 kali percobaan
    }
  }

  // Menanyakan apakah player ingin bermain lagi
  var playAgain = confirm('Apakah kamu ingin bermain lagi?');
  // Jika player memilih untuk bermain lagi, reset loop
  if (playAgain) {
    i = -1; // Reset loop untuk memulai permainan baru
  } else {
    // Jika player tidak ingin bermain lagi, keluar dari loop
    alert('Terima kasih telah bermain! Sampai jumpa lagi!');
  }
}
