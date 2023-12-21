// let obj={
//     a:1,
//     b:"Emtiaz"
// }
// console.log(obj);

// let animal={
//     eats: true
// };
// let rabbit={
//     jumps: true
// };
// rabbit.__proto__=animal;

class animal{
    constructor(name){
        this.name=name;

        console.log("Object is created and he is a lion ...")
    }
    eats(){
        console.log("they are eating")
    }
    jumps(){
        console.log("they jump")
    }
}
class Lion extends animal{
}
    

let a = new animal("Tommy");
console.log(a);

let l = new Lion("Lion");
console.log(l);