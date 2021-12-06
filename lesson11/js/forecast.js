let cityURL = ""; 
let cityPage = document.querySelector("h2").textContent;
if (cityPage === "The town of Preston Idaho"){
  cityURL = `http://pro.openweathermap.org/data/2.5/forecast/hourly?id=5604473&units=imperial&appid=e3fb9695ca3ae44886d055c51f30dcb2`
  // Preston city = "5604473"
}else if (cityPage === "The Town of Soda Springs Idaho"){ 
  cityURL = `http://pro.openweathermap.org/data/2.5/forecast/hourly?id=5607916&units=imperial&appid=e3fb9695ca3ae44886d055c51f30dcb2`
  // SodaSprings city = "5607916"
}else if (cityPage === "The Town of Fish Haven Idaho"){
  cityURL = `http://pro.openweathermap.org/data/2.5/forecast/hourly?id=5585010&units=imperial&appid=789014a950c83560c0a72965a5dfd442`
  // FishHaven city = "5585010"
};

const api = fURL;
fetch(api)
.then((response) => response.json())
.then((jsObject) => {

    const time = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(jsObject);

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
