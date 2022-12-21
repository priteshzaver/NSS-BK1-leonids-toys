const toys = [
    {
        id: 1,
        name: "Xbox Series X",
        maker: "Microsoft",
        controllers: 1
    },
    {
        id: 2,
        name: "Playstation 5",
        maker: "Sony",
        controllers: 1
    },
    {
        id: 3,
        name: "Switch",
        maker: "Nintendo",
        controllers: 2
    }
]    

/* 
for (const toy of toys) {
    console.log(toy.id)
}
for (const toy of toys) {
    console.log(toy.name)
}
for (const toy of toys) {
    console.log(toy.maker)
}
for (const toy of toys) {
    console.log(toy.price)
}
for (const toy of toys) {
    console.log(toy.controllers)
}
*/

const pc = {
    id: 4,
    name: "Computer",
    maker: "Dell",
    controllers: 0
}
const gameboy = {
    id: 5,
    name: "Gameboy Color",
    maker: "Nintendo",
    controllers: 0
}
toys.push(pc)
toys.push(gameboy)

/*
for (const toy of toys) {
    if (toy.id === 1) { //change the number here to find the toy.
        toy.price = toy.price * 0.05 + toy.price;

        console.log(`The ${toy.maker} ${toy.name} costs $${toy.price} and comes with ${toy.controllers} controller(s).`)
    }
}
*/



const toyPrice = new Map()
toyPrice.set("Xbox Series X", "300")
toyPrice.set("Playstation", "350")
toyPrice.set("Nintendo", "200")
toyPrice.set("Computer", "800")
toyPrice.set("Gameboy", "70")

for (let [key, value] of toyPrice) {
    console.log(key, value);
  }

const addPhoneToInventory = (phoneObject, price) => {

}