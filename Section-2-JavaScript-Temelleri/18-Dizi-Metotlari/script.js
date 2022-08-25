let diller = ["Html", "Css", "Javascript"];

let sonuc;

sonuc = diller.length;

//array to string
sonuc = diller.toString();
sonuc = diller.join(" ");

// eleman silme
sonuc = diller.pop(); // son eleman silinir ve silinen eleman geri döndürülür
sonuc = diller.shift(); // ilk elaman silinir

// eleman ekleme
sonuc = diller.push("React"); // eleman dizinin sonuna eklenir
sonuc = diller.unshift("Next.js"); // eleman dizinin başına eklenir

//---------------------------------------------------------
let markalar1 = ["Mazda", "Toyota"];
let markalar2 = ["Opel", "Renault"];
let markalar3 = ["Ford"];

sonuc = markalar1.concat(markalar2, markalar3);

console.log(sonuc);
console.log(markalar1);
//---------------------------------------------------------
let deger;

deger = markalar1.splice(0, 0, markalar2);
deger = markalar1.splice(0, 1, "bmw", "audi");
deger = markalar1.splice(0, 1);

console.log(deger);
console.log(markalar1);
