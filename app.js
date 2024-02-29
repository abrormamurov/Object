let meObject = {
  familiya: "Ma'murov",
  ism: "Abror",
  yosh: 19,
  tugilganJoy: "Fargona",
  yashashJoy: "Fargona",
  oqishJoy: "Najot Ta'lim",
  yahshiKorganSporti: "Boks",
  hobbisi: "Muzika eshitish",
  qiziqishi: "Dasturlash",
  dostlari: "3ta",
};

const obj = new Object();
const obJ = {};

const new_person = {
  name: "Abror",
  age: 19,
  sayName: function () {
    console.log("Mening ismim" + this.name);
  },
  sayAge: function () {
    console.log("Men" + this.age + "yoshdaman");
  },
  sayAll: function () {
    this.sayName();
    this.sayAge();
  },
};
