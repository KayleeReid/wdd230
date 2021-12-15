let cityURL = "";
let cityPage = document.querySelector("h2").textContent;

  cityURL = `https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=789014a950c83560c0a72965a5dfd442`
  // Preston city = "5604473"




fetch(cityURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.querySelector('#C').textContent = jsObject.weather[0].main;
    document.querySelector('#temp').textContent = `${jsObject.main.temp.toFixed(0)} ℉`;
    document.querySelector('#H').textContent = `${jsObject.main.humidity.toFixed(0)}%`;
    document.querySelector('#wSpeed').textContent = `${jsObject.wind.speed.toFixed(0)} mph`;
    const t = parseFloat(jsObject.main.temp.toFixed(0));
    const w = parseFloat(jsObject.wind.speed.toFixed(0));
    const wcfactor = windChill(t, w);

    document.querySelector('#wChill').innerHTML = wcfactor;
  });

  function windChill(t, w) {
    let wcfactor = 0
    let a = 35.74;
    let b = 0.6215;
    let c = 35.75;
    let d = 0.16;
    let e = 0.4275;

    if (t <= 50 && w > 3) {
      wcfactor = a + (t * b)
        - (c * Math.pow(w, d))
        + (e * t * Math.pow(w, d))
      wcfactor = `${wcfactor.toFixed(0)}℉`
    } else { wcfactor = "N/A" }

    return wcfactor;
  }

