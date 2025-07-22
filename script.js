// Membuat pengulangan
var playAgain = true;

while (playAgain) {
  // Menangkap pilihan player (Gajah, Semut, Orang)
  var playerChoice = prompt('Pilih Gajah, Semut, Orang:');

  // Memilih pilihan komputer secara acak (random)
  var com = Math.random();

  // Menentukan pilihan komputer berdasarkan nilai acak
  if (com < 0.34) {
    // jika nilai acak kurang dari 0.34, pilih Gajah
    com = 'Gajah' || 'gajah';
  } else if (com >= 0.34 && com < 0.67) {
    // jika nilai acak antara 0.34 dan 0.67, pilih Semut
    com = 'Semut' || 'semut';
  } else {
    // jika nilai acak lebih dari atau sama dengan 0.67, pilih Orang
    com = 'Orang' || 'orang';
  }

  // Menentukan pemenang berdasarkan pilihan player dan komputer (Rules: Gajah, Semut, Orang)

  if (playerChoice === com) {
    // Jika pilihan player dan komputer sama
    alert('Hasil: Seri! Kamu memilih ' + playerChoice + ' dan Komputer memilih ' + com);
  } else if (playerChoice === 'Gajah' || playerChoice === 'gajah') {
    if (com === 'Semut') {
      // Gajah mengalahkan Semut
      alert('Hasil: Kamu menang! Gajah mengalahkan Semut.');
    } else {
      // Gajah kalah dari Orang
      alert('Hasil: Kamu kalah! Orang mengalahkan Gajah.');
    }
  } else if (playerChoice === 'Semut' || playerChoice === 'semut') {
    if (com === 'Orang') {
      // Semut mengalahkan Orang
      alert('Hasil: Kamu menang! Semut mengalahkan Orang.');
    } else {
      // Semut kalah dari Gajah
      alert('Hasil: Kamu kalah! Gajah mengalahkan Semut.');
    }
  } else if (playerChoice === 'Orang' || playerChoice === 'orang') {
    if (com === 'Gajah') {
      // Orang mengalahkan Gajah
      alert('Hasil: Kamu menang! Orang mengalahkan Gajah.');
    } else {
      // Orang kalah dari Semut
      alert('Hasil: Kamu kalah! Semut mengalahkan Orang.');
    }
  } else {
    // Jika pilihan player tidak valid
    alert('Pilihan tidak valid! Silakan pilih Gajah, Semut, atau Orang.');
  }
  // Menanyakan apakah player ingin bermain lagi
  playAgain = confirm('Apakah kamu ingin bermain lagi?');
}
// Menampilkan Akhir
alert('Terima kasih telah bermain! Sampai jumpa lagi!');
