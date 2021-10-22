

const day = new Date(Date.now());

if (day.getDate() == 4) {
    var m = document.getElementsByClassName("message")
    m.style.display = 'block'
}
else{
    m.style.display = 'none'
}
