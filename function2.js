let year = prompt("please Enter year")
let gen = parseInt(year)

function Ganeration(gen, ILY) {
    let gen1 = ['Z', 'Y', 'X', 'Baby Boomers', 'Silent', 'Greatest', 'Lost'];
    if (gen >= 2000 && year <= 2020) {
        alert(`${gen} is ${gen1[0]} Ganeration : ${ILY}`);
        console.log(`${gen} is ${gen1[0]} Ganeration : ${ILY}`);
        document.getElementById("hContent").innerHTML = (`${gen} is ${gen1[0]} Ganeration : ${ILY}`);
    } else if (gen >= 1980 && gen <= 1999) {
        alert(`${gen} is ${gen1[1]} Ganeration : ${ILY}`);
        console.log(`${gen} is ${gen1[1]} Ganeration : ${ILY}`);
        document.getElementById("hContent").innerHTML = (`${gen} is ${gen1[1]} Ganeration : ${ILY}`);
    } else if (gen >= 1960 && gen <= 1979) {
        alert(`${gen} is ${gen1[2]} Ganeration : ${ILY}`);
        console.log(`${gen} is ${gen1[2]} Ganeration : ${ILY}`);
        document.getElementById("hContent").innerHTML = (`${gen} is ${gen1[2]} Ganeration : ${ILY}`);
    } else if (gen >= 1940 && gen <= 1959) {
        alert(`${gen} is ${gen1[3]} Ganeration : ${ILY}`);
        console.log(`${gen} is ${gen1[3]} Ganeration : ${ILY}`);
        document.getElementById("hContent").innerHTML = (`${gen} is ${gen1[3]} Ganeration : ${ILY}`);
    } else if (gen >= 1920 && gen <= 1939) {
        alert(`${gen} is ${gen1[4]} Ganeration : ${ILY}`);
        console.log(`${gen} is ${gen1[4]} Ganeration : ${ILY}`);
        document.getElementById("hContent").innerHTML = (`${gen} is ${gen1[4]} Ganeration : ${ILY}`);
    } else if (gen >= 1900 && gen <= 1919) {
        alert(`${gen} is ${gen1[5]} Ganeration : ${ILY}`);
        console.log(`${gen} is ${gen1[5]} Ganeration : ${ILY}`);
        document.getElementById("hContent").innerHTML = (`${gen} is ${gen1[5]} Ganeration : ${ILY}`);
    } else if (gen >= 1880 && gen <= 1899) {
        alert(`${gen} is ${gen1[6]} Ganeration : ${ILY}`);
        console.log(`${gen} is ${gen1[6]} Ganeration : ${ILY}`);
        document.getElementById("hContent").innerHTML = (`${gen} is ${gen1[6]} Ganeration : ${ILY}`);
    } else {
        alert(`${gen} ERROR Ganeration : ${ILY}`);
        console.log(`${gen} ERROR Ganeration : ${ILY}`);
        document.getElementById("hContent").innerHTML = (`${gen} ERROR Ganeration : ${ILY}`);
    }
}
Ganeration(gen, "I LOVE YOU")