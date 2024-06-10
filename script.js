class User {
  constructor(name, surname, age, location) {
    (this.firstName = name), (this.lastName = surname), (this.age = age), (this.location = location);
  }
  isOlder(userToCompare) {
    if (this.age > userToCompare.age) {
      console.log(this.firstName, "è più vecchio di", userToCompare.firstName);
    } else {
      console.log(userToCompare.firstName + " è più vecchio di " + this.firstName);
    }
  }
}

const aldo = new User("Aldo", "Baglio", 52, "Pizzo Calabro");
const giovanni = new User("Giovanni", "Storti", 64, "Milano");

console.log(aldo);
console.log(giovanni);

aldo.isOlder(giovanni);
giovanni.isOlder(aldo);
