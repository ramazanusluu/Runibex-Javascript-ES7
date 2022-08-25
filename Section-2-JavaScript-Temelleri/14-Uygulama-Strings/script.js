let url = "https://www.sadikturan.com";
let kursAdi = "Komple Web Geliştirme Kursu";

//-------------------------------------------------
let sonuc;
//-------------------------------------------------

// 1- url kaç karakterlidir?
sonuc = url.length;

// 2- KursAdi kaç kelimeden oluşmaktadır?
sonuc = kursAdi.split(" ").length;

// 3- url https ile mi başlıyor?
sonuc = url.startsWith("https");

if (sonuc) {
  console.log("Evet Başlıyor");
}

// 4- KursAdi içerisinde Eğitimi kelimesi var mı ?
if (kursAdi.indexOf("Eğitimi") > -1) {
  console.log("evet var");
} else {
  console.log("Hayıt Yok");
}

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz
// https://www.sadikturan.com/komple-web-gelistirme-kursu

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ", "-");
kursAdi = kursAdi.replaceAll("ş", "s");
kursAdi = kursAdi.replaceAll("ı", "i");

sonuc = `${url}/${kursAdi}`;

//---------------------------------------------------------

console.log(sonuc);
