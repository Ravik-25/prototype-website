const namaSaya = "ravik";
let usia = 1;

const biodata = document.getElementById('biodata');

function generateBiodata() {
  let generasi;
//kondisi start
  if (usia > 10 && usia < 18) {
    generasi = "generasi remaja";
  } 
  else if (usia > 18 && usia < 30) {
    generasi = "generasi dewasa"
  }
  else if (usia >= 30) {
    generasi = "udh tua lu bro"
  }
  else if (usia > 2 && usia < 10) {
    generasi = "generasi anak-anak"
  }
  else {
    generasi = "masih bayi lu"
  }
//kondisi end
  return console.log('generasi saya adalah', generasi);
}

console.log(namaSaya);
console.log(usia);
generateBiodata();

