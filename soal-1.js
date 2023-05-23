let mahasiswa = {
    nama : "Andriansyah",
    nim : "02042111007",
    email : "andri300401@gmail.com",
}
let {nama,nim,email} = mahasiswa;
console.log(`Nama : ${nama}\nNIM : ${nim}\NEmail : ${email}}`);

const teman1 = ["Faisal","Sawal"];
const teman2 = ["Akbar","Reza"];
const teman3 = ["Helmi","Azriel"];

const semuaTeman = [...teman1,...teman2,...teman3];
console.log(semuaTeman);