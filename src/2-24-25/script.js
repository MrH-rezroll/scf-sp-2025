let vehicles = [
    { type: "crossover suv", color: "yellow", tire: "Goodyear", make: "Toyota", model: "Rav4" },
    { type: "truck", color: "red", tire: "Michelin", make: "Ford", model: "F-150" },
    { type: "sedan", color: "blue", tire: "Bridgestone", make: "Honda", model: "Accord" },
    { type: "hatchback", color: "green", tire: "Pirelli", make: "Chevrolet", model: "Spark" },
    { type: "coupe", color: "black", tire: "Continental", make: "BMW", model: "M4" },
    { type: "convertible", color: "white", tire: "Goodyear", make: "Audi", model: "A5" },
    { type: "minivan", color: "silver", tire: "Michelin", make: "Mercedes", model: "Sprinter" },
    { type: "electric car", color: "purple", tire: "Bridgestone", make: "Nissan", model: "Leaf" },
    { type: "hybrid", color: "orange", tire: "Pirelli", make: "Kia", model: "Niro" },
    { type: "luxury sedan", color: "brown", tire: "Continental", make: "Hyundai", model: "Genesis" },
    { type: "crossover suv", color: "maroon", tire: "Goodyear", make: "Volkswagen", model: "Tiguan" },
    { type: "truck", color: "navy", tire: "Michelin", make: "Subaru", model: "Outback" },
    { type: "sedan", color: "olive", tire: "Bridgestone", make: "Mazda", model: "Mazda3" },
    { type: "hatchback", color: "coral", tire: "Pirelli", make: "Lexus", model: "CT200h" },
    { type: "coupe", color: "magenta", tire: "Continental", make: "Jaguar", model: "F-Type" },
    { type: "convertible", color: "indigo", tire: "Goodyear", make: "Volvo", model: "C30" },
    { type: "minivan", color: "violet", tire: "Michelin", make: "Acura", model: "MDX" },
    { type: "electric car", color: "turquoise", tire: "Bridgestone", make: "Infiniti", model: "QX50" },
    { type: "hybrid", color: "gold", tire: "Pirelli", make: "GMC", model: "Terrain" },
    { type: "luxury sedan", color: "teal", tire: "Continental", make: "Ram", model: "1500" },
    { type: "crossover suv", color: "red", tire: "Goodyear", make: "Toyota", model: "Highlander" },
    { type: "truck", color: "blue", tire: "Michelin", make: "Ford", model: "F-250" },
    { type: "sedan", color: "green", tire: "Bridgestone", make: "Honda", model: "Civic" },
    { type: "hatchback", color: "yellow", tire: "Pirelli", make: "Chevrolet", model: "Bolt" },
    { type: "coupe", color: "black", tire: "Continental", make: "BMW", model: "4 Series" },
    { type: "convertible", color: "white", tire: "Goodyear", make: "Audi", model: "TT" },
    { type: "minivan", color: "silver", tire: "Michelin", make: "Mercedes", model: "V-Class" },
    { type: "electric car", color: "purple", tire: "Bridgestone", make: "Nissan", model: "e-NV200" },
    { type: "hybrid", color: "orange", tire: "Pirelli", make: "Kia", model: "Optima Hybrid" },
    { type: "luxury sedan", color: "brown", tire: "Continental", make: "Hyundai", model: "Equus" },
    { type: "crossover suv", color: "maroon", tire: "Goodyear", make: "Volkswagen", model: "T-Roc" },
    { type: "truck", color: "navy", tire: "Michelin", make: "Subaru", model: "BRZ" },
    { type: "sedan", color: "olive", tire: "Bridgestone", make: "Mazda", model: "Mazda6" },
    { type: "hatchback", color: "coral", tire: "Pirelli", make: "Lexus", model: "IS" },
    { type: "coupe", color: "magenta", tire: "Continental", make: "Jaguar", model: "XE" },
    { type: "convertible", color: "indigo", tire: "Goodyear", make: "Volvo", model: "S60" },
    { type: "minivan", color: "violet", tire: "Michelin", make: "Acura", model: "RLX" },
    { type: "electric car", color: "turquoise", tire: "Bridgestone", make: "Infiniti", model: "Q50" },
    { type: "hybrid", color: "gold", tire: "Pirelli", make: "GMC", model: "Sierra" },
    { type: "luxury sedan", color: "teal", tire: "Continental", make: "Ram", model: "2500" },
    { type: "crossover suv", color: "red", tire: "Goodyear", make: "Toyota", model: "4Runner" },
    { type: "truck", color: "blue", tire: "Michelin", make: "Ford", model: "Ranger" },
    { type: "sedan", color: "green", tire: "Bridgestone", make: "Honda", model: "Insight" },
    { type: "hatchback", color: "yellow", tire: "Pirelli", make: "Chevrolet", model: "Spark EV" },
    { type: "coupe", color: "black", tire: "Continental", make: "BMW", model: "Z4" },
    { type: "convertible", color: "white", tire: "Goodyear", make: "Audi", model: "S5 Cabriolet" },
    { type: "minivan", color: "silver", tire: "Michelin", make: "Mercedes", model: "Metris" },
    { type: "electric car", color: "purple", tire: "Bridgestone", make: "Nissan", model: "NV200" },
    { type: "hybrid", color: "orange", tire: "Pirelli", make: "Kia", model: "Soul EV" },
    { type: "luxury sedan", color: "brown", tire: "Continental", make: "Hyundai", model: "Genesis G80" }
  ];  

const carSelectorElement = document.getElementById("CarSelector");
carSelectorElement.innerHTML = "";

const makeModelDisplay = document.getElementById("MakeModel");
const carDetailsDisplay = document.getElementById("CarDetails");

for(i = 0; i < vehicles.length; i++){
    let option = document.createElement("option");
    option.text = vehicles[i].model;
    option.value = i;
    
    carSelectorElement.appendChild(option);
}

carSelectorElement.addEventListener("change", (event) => {
    let message = vehicles[event.target.value].make + " " + vehicles[event.target.value].model;
    makeModelDisplay.innerText = message;
});
