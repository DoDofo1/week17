let year = prompt("please enter year");
let gen = parseInt(year);

function Generation(gen, ILY) {
    if (gen >= 2000 && gen <= 2020) {
        alert(`Z ganeration ${gen} ${ILY}`);
        console.log(`Z ganeration ${gen} ${ILY}`);
        document.getElementById("hContent").innerHTML = (`Z ganerration ${gen} ${ILY}`);
    } else if (gen >= 1980 && gen <= 1999) {
        alert(`Y ganeration ${gen} ${ILY}`)
        console.log(`Y ganeration ${gen} ${ILY}`);
        document.getElementById("hContent").innerHTML = (`Y ganeration ${gen} ${ILY}`);
    } else if (gen >= 1960 && gen <= 1979) {
        alert(`X ganeration ${gen} ${ILY}`)
        console.log(`X Ganeration ${gen} ${ILY}`);
        document.getElementById("hContent").innerHTML = (`X ganeration ${gen} ${ILY}`);
    } else if (gen >= 1940 && gen <= 1959) {
        alert(`The baby boomers ganeration ${gen} ${ILY}`)
        console.log(`The baby boomers ganeration ${gen} ${ILY}`);
        document.getElementById("hContent").innerHTML = (`The baby boomers ${gen} ${ILY}`);
    } else if (gen >= 1920 && gen <= 1939) {
        alert(`The silent ganeration ${gen} ${ILY}`)
        console.log(`The silent ganeration ${gen} ${ILY}`);
        document.getElementById("hContent").innerHTML = (`The silent ganeration ${gen} ${ILY}`);
    } else if (gen >= 1900 && gen <= 1919) {
        alert(`The Greatest ganeration ${gen} ${ILY}`)
        console.log(`The Greatest ganeration ${gen} ${ILY}`);
        document.getElementById("hContent").innerHTML = (`The Greatest Ganeration ${gen} ${ILY}`);
    } else if (gen >= 1880 && gen <= 1899) {
        alert(`The Lost ganeration ${gen} ${ILY}`)
        console.log(`The Lost ganeration ${gen} ${ILY}`);
        document.getElementById("hContent").innerHTML = (`The lost Ganeration ${gen} ${ILY}`);
    } else {
        alert(`ERROR ganeration ${gen} ${ILY}`)
        console.log(`ERROR Ganeration ${gen} ${ILY}`);
        document.getElementById("hContent").innerHTML = (`ERROR Ganeration ${gen} ${ILY}`);
    }
}
Generation(gen, "I LOVE YOU");