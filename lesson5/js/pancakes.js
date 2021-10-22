

const day = new Date(Date.now());

if (day.getDate() == 5) {
    var m = document.getElementsByClassName("message")
    m.style.display = 'block'
}
else{
    m.style.display = 'none'
}
