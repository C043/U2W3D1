/* ESERCIZIO 1 */

class User {
  constructor(name, surname, age, location) {
    (this.firstName = name), (this.lastName = surname), (this.age = age), (this.location = location);
  }
  isOlder(userToCompare) {
    if (this.age > userToCompare.age) {
      console.log(this.firstName + " è più vecchio di " + userToCompare.firstName);
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

/* ESERCIZIO 2 */

class Pet {
  constructor(petName, ownerName, species, breed) {
    (this.petName = petName), (this.ownerName = ownerName), (this.species = species), (this.breed = breed);
  }
  isSameOwner(petToCompare) {
    return this.ownerName === petToCompare.ownerName ? true : false;
  }
}

const petty = new Pet("Petty", "Mario", "Cane", "Golden Retriever");
const frollino = new Pet("Frollino", "Mario", "Cane", "Barboncino");

console.log(petty.isSameOwner(frollino));

const petForm = document.getElementById("pet-creator");
petForm.onsubmit = (ev) => {
  ev.preventDefault();
  const petNameValue = document.getElementById("pet-name").value;
  const petOwnerValue = document.getElementById("pet-owner").value;
  const speciesValue = document.getElementById("species").value;
  const breedValue = document.getElementById("breed").value;
  console.log(petNameValue, petOwnerValue, speciesValue, breedValue);

  const pet = new Pet(petNameValue, petOwnerValue, speciesValue, breedValue);
  const petList = document.getElementById("pet-list");
  const newPetLi = document.createElement("li");
  newPetLi.innerHTML = `<b>Nome del pet:</b> ${pet.petName} <br> 
  <b>Proprietario:</b> ${pet.ownerName} <br> 
  <b>Specie del pet:</b> ${pet.species} <br>
  <b>Razza del pet:</b> ${pet.breed}`;
  petList.appendChild(newPetLi);
  petForm.reset();
};
