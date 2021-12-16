
  cityURL = `https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=789014a950c83560c0a72965a5dfd442`
  // Preston city = "5604473"




fetch(cityURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.querySelector('#C').textContent = jsObject.weather[0].main;
    document.querySelector('#temp').textContent = `${jsObject.main.temp.toFixed(0)} ℉`;
    document.querySelector('#H').textContent = `${jsObject.main.humidity.toFixed(0)}%`;
    const t = parseFloat(jsObject.main.temp.toFixed(0));
    const w = parseFloat(jsObject.wind.speed.toFixed(0));
  });

  

