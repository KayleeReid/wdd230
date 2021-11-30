let cityURL = ""; 
let cityPage = document.querySelector("h2").textContent;
if (cityPage === "The town of Preston Idaho"){
  cityURL = `http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=789014a950c83560c0a72965a5dfd442`
  // Preston city = "5604473"
}else if (cityPage === "The Town of Soda Springs Idaho"){ 
  cityURL = `http://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=789014a950c83560c0a72965a5dfd442`
  // SodaSprings city = "5607916"
}else if (cityPage === "The Town of Fish Haven Idaho"){
  cityURL = `http://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=789014a950c83560c0a72965a5dfd442`
  // FishHaven city = "5585010"
};
 
const apiURL = cityURL;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   

    document.querySelector('#C').textContent = jsObject.weather[0].main;
    document.querySelector('#temp').textContent = `${jsObject.main.temp.toFixed(0)} ℉`;
    document.querySelector('#H').textContent = `${jsObject.main.humidity.toFixed(0)}%`;
    document.querySelector('#wSpeed').textContent = `${jsObject.wind.speed.toFixed(0)} mph`;
    const t = parseFloat(jsObject.main.temp.toFixed(0));
    const w = parseFloat(jsObject.wind.speed.toFixed(0));
    const wcfactor = windChill(t, w);

  function windChill(t, w){
    let wcfactor = 0
    let a = 35.74;
    let b = 0.6215;
    let c = 35.75;
    let d = 0.16;
    let e = 0.4275;

    if (t<=50 && w>3){
        wcfactor= a + (t * b)
        - (c * Math.pow(w,d))
        + (e * t * Math.pow(w,d ))
        wcfactor= `${wcfactor.toFixed(0)}℉`
    }else{wcfactor= "N/A"}
    
    return wcfactor;
  }
  document.querySelector('#wChill').innerHTML = wcfactor;
  });

 