let year = prompt("please enter year");
let gen = parseInt(year);

function Generation(gen, ILY) {
    let a = {
        a1: 'Z',
        a2: 'Y',
        a3: 'X',
        a4: 'The Baby Boomers',
        a5: 'The silent',
        a6: 'The Greatest',
        a7: 'The Lost',
    }
    if (gen >= 2000 && gen <= 2020) {
        alert(`${a.a1} ganeration ${gen} ${ILY}`)
        console.log(`${a.a1}ganeration ${gen} ${ILY}`);
        document.getElementById("hContent").innerHTML = (`${a.a1} ganerration ${gen} ${ILY}`);
    } else if (gen >= 1980 && gen <= 1999) {
        alert(`${a.a2} ganeration ${gen} ${ILY}`)
        console.log(`${a.a2} ganeration ${gen} ${ILY}`);
        document.getElementById("hContent").innerHTML = (`${a.a2} ganeration ${gen} ${ILY}`);
    } else if (gen >= 1960 && gen <= 1979) {
        alert(`${a.a3} ganeration ${gen} ${ILY}`)
        console.log(`${a.a3} Ganeration ${gen} ${ILY}`);
        document.getElementById("hContent").innerHTML = (`${a.a3} ganeration ${gen} ${ILY}`);
    } else if (gen >= 1940 && gen <= 1959) {
        alert(`${a.a4} ganeration ${gen} ${ILY}`)
        console.log(`${a.a4} ganeration ${gen} ${ILY}`);
        document.getElementById("hContent").innerHTML = (`${a.a4} ganeration${gen} ${ILY}`);
    } else if (gen >= 1920 && gen <= 1939) {
        alert(`${a.a5} ganeration ${gen} ${ILY}`)
        console.log(`${a.a5} ganeration ${gen} ${ILY}`);
        document.getElementById("hContent").innerHTML = (`${a.a5} ganeration ${gen} ${ILY}`);
    } else if (gen >= 1900 && gen <= 1919) {
        alert(`${a.a6} ganeration ${gen} ${ILY}`)
        console.log(`${a.a6} ganeration ${gen} ${ILY}`);
        document.getElementById("hContent").innerHTML = (`${a.a6} Ganeration ${gen} ${ILY}`);
    } else if (gen >= 1880 && gen <= 1899) {
        alert(`${a.a7} ganeration ${gen} ${ILY}`)
        console.log(`${a.a7} ganeration ${gen} ${ILY}`);
        document.getElementById("hContent").innerHTML = (`${a.a7} Ganeration ${gen} ${ILY}`);
    } else {
        alert(`ERROR ganeration ${gen} ${ILY}`)
        console.log(`ERROR Ganeration ${gen} ${ILY}`);
        document.getElementById("hContent").innerHTML = (`ERROR Ganeration ${gen} ${ILY}`);
    }
}
Generation(gen, "I LOVE YOU");