// function untuk pilihan komputer
function getPilihanCom() {
  // Memilih pilihan komputer secara acak (random)
  const com = Math.random();
  // Menentukan pilihan komputer berdasarkan nilai acak
  if (com < 0.34)
    // jika nilai acak kurang dari 0.34, pilih Gajah
    return 'gajah';
  if (com >= 0.34 && com < 0.67)
    // jika nilai acak antara 0.34 dan 0.67, pilih Semut
    return 'orang';
  // jika nilai acak lebih dari atau sama dengan 0.67, pilih Orang
  return 'semut';
}

// function untuk menentukan pemenang
function getHasil(com, playerChoice) {
  if (playerChoice === com)
    // Jika pilihan player dan komputer sama
    return 'SERI!';
  if (playerChoice === 'gajah')
    return com === 'orang'
      ? // Gajah mengalahkan Orang
        'MENANG!'
      : // Gajah kalah dari Semut
        'KALAH!';
  if (playerChoice === 'semut')
    return com === 'gajah'
      ? // Semut mengalahkan Gajah
        'MENANG!'
      : // Semut kalah dari Orang
        'KALAH!';
  if (playerChoice === 'orang')
    return com === 'semut'
      ? // Orang mengalahkan Semut
        'MENANG!'
      : // Orang kalah dari Gajah
        'KALAH!';
}

// teming computer
function putar() {
  const imgCom = document.querySelector('.img-com');
  const gambar = ['gajah', 'semut', 'orang'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    // Menampilkan gambar secara bergantian
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgCom.setAttribute('src', `img/${gambar[i++]}.jpg`);
    if (i === gambar.length) i = 0;
  }, 100);
}

// Hasil Score Komputer dan Player
let scoreC = 0;
let scoreP = 0;
function hasilScore(hasil) {
  const scoreCom = document.querySelector('.skor-com');
  const scorePlayer = document.querySelector('.skor-player');
  if (hasil === 'MENANG!') scoreP++;
  else if (hasil === 'KALAH!') scoreC++;

  scoreCom.innerHTML = scoreC;
  scorePlayer.innerHTML = scoreP;
}

const pilihan = document.querySelectorAll('li img');
// Lopping untuk setiap pilihan
pilihan.forEach(function (p) {
  p.addEventListener('click', function () {
    // Menangkap pilihan player (Gajah, Semut, Orang)
    const playerChoice = p.className;
    // Memanggil function untuk pilihan komputer
    const com = getPilihanCom();
    // Menentukan hasil
    const hasil = getHasil(com, playerChoice);
    // Memutar gambar komputer
    putar();

    setTimeout(function () {
      // Menampilkan hasil
      const imgCom = document.querySelector('.img-com');
      imgCom.setAttribute('src', `img/${com}.jpg`);
      const info = document.querySelector('.info');
      info.innerHTML = hasil;
      hasilScore(hasil);
    }, 1000);
  });
});

// // Pilih Gajah
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//   // Menangkap pilihan player (Gajah)
//   const playerChoice = pGajah.className;
//   // Memanggil function untuk pilihan komputer
//   const com = getPilihanCom();
//   // Menentukan hasil
//   const hasil = getHasil(com, playerChoice);
//   // Menampilkan hasil
//   //   alert(`Hasil: ${hasil}! Kamu memilih ${playerChoice} dan Komputer memilih ${com}`);
//   //   console.log('com:', com);
//   //   console.log('playerChoice:', playerChoice);
//   //   console.log('hasil:', hasil);
//   const imgCom = document.querySelector('.img-com');
//   imgCom.setAttribute('src', `img/${com}.jpg`);
//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });

// // Pilih Semut
// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function () {
//   // Menangkap pilihan player (Semut)
//   const playerChoice = pSemut.className;
//   // Memanggil function untuk pilihan komputer
//   const com = getPilihanCom();
//   // Menentukan hasil
//   const hasil = getHasil(com, playerChoice);
//   // Menampilkan hasil
//   const imgCom = document.querySelector('.img-com');
//   imgCom.setAttribute('src', `img/${com}.jpg`);
//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });

// // Pilih Orang
// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {
//   // Menangkap pilihan player (Orang)
//   const playerChoice = pOrang.className;
//   // Memanggil function untuk pilihan komputer
//   const com = getPilihanCom();
//   // Menentukan hasil
//   const hasil = getHasil(com, playerChoice);
//   // Menampilkan hasil
//   const imgCom = document.querySelector('.img-com');
//   imgCom.setAttribute('src', `img/${com}.jpg`);
//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });

// function untuk menampilkan hasil
