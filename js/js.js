class Human {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Apartment {
    residents = [];
    addResident(resident) {
        this.residents.push(resident)
    }
}

class Building {
    flats = [];
    constructor(maxFlatsQuantity = 3) {
        this.maxFlatsQuantity = maxFlatsQuantity
    }

    addFlat(flat) {
        if (this.flats.length < this.maxFlatsQuantity){
            this.flats.push(flat)
        } else {
            console.log('too many flats')
        }
        }
}

const petr = new Human('Petr','male');
const jane = new Human('Jane','women');
const lena = new Human('Lena','women')

const apartment1 = new Apartment();
const apartment2 = new Apartment();

apartment1.addResident(petr);
apartment2.addResident(lena)
apartment2.addResident(jane);

const building1 = new Building();
building1.addFlat(apartment2);
building1.addFlat(apartment1)

console.log(building1)