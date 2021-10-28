const t = parseFloat (document.querySelector('.temp').textContent);
const w = parseFloat (document.querySelector('.wSpeed').textContent);
let wChill;

if (t <= 50 && w > 3){
    wChill = calculateWindChill(t,w);
}
else{
    wChill = 'NA'
}

function calculateWindChill (t,w){
    let a = 35.74;
    let b = 0.6215;
    let c = 35.75;
    let d = 0.16;
    let e = 0.4275;

    let x = a + (t * b)
    - (c * Math.pow(w,d))
    + (e * t * Math.pow(w,d ));
    return x.toFixed(0);
}
document.querySelector('.wChill').innerHTML = wChill + '°F';