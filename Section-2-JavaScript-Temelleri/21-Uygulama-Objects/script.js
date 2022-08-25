/*
    1- Sipariş bilgilerini object içinde saklayınız.
    2- Her siparişin kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.
*/

let siparis_1 = {
  siparis_id: 101,
  sipariş_tarihi: "30.12.2022",
  odeme_sekli: "kredi kartı",
  kargo_adresi: {
    mahalle: "Akasya",
    il: "Hatay",
    ilce: "Antakya",
  },
  urunler: [
    {
      urun_id: 5,
      urun_adi: "iphone 13 pro",
      urun_url: "https://abc.com/iphone-13-pro",
      urun_fiyat: 22000,
    },
    {
      urun_id: 6,
      urun_adi: "iphone 13 pro max",
      urun_url: "https://abc.com/iphone-13-pro-max",
      urun_fiyat: 25000,
    },
  ],
};
let siparis_2 = {
  siparis_id: 102,
  sipariş_tarihi: "30.12.2022",
  odeme_sekli: "kredi kartı",
  kargo_adresi: {
    mahalle: "Akasya",
    il: "Hatay",
    ilce: "Antakya",
  },
  urunler: [
    {
      urun_id: 6,
      urun_adi: "iphone 13 pro max",
      urun_url: "https://abc.com/iphone-13-pro-max",
      urun_fiyat: 25000,
    },
  ],
};

let siparis_1_toplam =
  (siparis_1.urunler[0].urun_fiyat + siparis_1.urunler[1].urun_fiyat) * 1.18;

let siparis_2_toplam = siparis_1.urunler[0].urun_fiyat * 1.18;

let toplam_siparis = siparis_1_toplam + siparis_2_toplam;

let siparişler = {
  siparis_1,
  siparis_2,
};

console.log("Siparis 1: ", siparis_1_toplam);
console.log("Siparis 2: ", siparis_2_toplam);

console.log("Toplam :", toplam_siparis);
