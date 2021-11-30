let fURL = ""; 
let city = document.querySelector("h2").textContent;
if (city === "The town of Preston Idaho"){
  fURL = `http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=789014a950c83560c0a72965a5dfd442`
  // Preston city = "5604473"
}else if (city === "The Town of Soda Springs Idaho"){ 
  fURL = `http://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=789014a950c83560c0a72965a5dfd442`
  // SodaSprings city = "5607916"
}else if (city === "The Town of Fish Haven Idaho"){
  fURL = `http://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=789014a950c83560c0a72965a5dfd442`
  // FishHaven city = "5585010"
};

const api = fURL;
fetch(api)
.then((response) => response.json())
.then((jsObject) => {

    const time = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    let day = 0;
    time.forEach(forecast => {
        
        let thedate = new Date(forecast.dt_txt);
        let imagesrc = 'https://openweathermap.org/img/wn/' + forecast.weather[0].icon + '.png'; 
        const description = forecast.weather[0].description;

        document.querySelector(`#weekday${day+1}`).textContent = weekdays[thedate.getDay()];
        document.querySelector(`#forecast${day+1}`).textContent = forecast.main.temp.toFixed(0) + "°F";
        document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
        document.getElementById(`icon${day+1}`).setAttribute('alt', description);
        day++;
        
   
});
    });
