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
    let x = 35.74 + (t *0.6215)
    - (35.75 * Math.pow(w,0.16))
    + (0.4275 * t * Math.pow(w,0.16 ));
    return x.toFixed(0);
}
document.querySelector('.wChill').innerHTML = wChill + '°F';