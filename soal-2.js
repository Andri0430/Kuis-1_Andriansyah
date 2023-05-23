const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const gabungHewan = () => {
    const tampHewan = [...hewanBuas, ...hewanJinak];
    return tampHewan;
};

const jenisMakanan = ["Ikan atau daging segar", "Sayuran", "Pemakan Segala"];
const makananKesukaan = () => {
    hewanJinak.map((n , i) => {
        console.log(`${n} Makanan Kesukaan : ${jenisMakanan[i]}`);
    });
}

console.log(makananKesukaan());
setTimeout(() => {
    makananKesukaan();
},5000);