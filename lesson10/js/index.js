const requestURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    
    const townName = towns.filter((town) => town.name ==='Preston' || town.name ==='Soda Springs' || town.name ==='Fish Haven');
    townName.forEach((town) => { 
      
      //this creates the elements in HTML
      let card = document.createElement("section");
      let info = document.createElement ('info');
      let h2 = document.createElement("h2");
      let motto = document.createElement("q");
      let year = document.createElement("p");
      let pop = document.createElement("p");
      let rain = document.createElement("p");
      let img = document.createElement("img");

      h2.innerHTML = `${town.name}`;
      motto.innerHTML = `${town.motto}`;
      year.innerHTML = `Year Founded: ${town.yearfounded}`;
      pop.innerHTML= `Population: ${town.currentPopulation}`;
     rain.innerHTML = `Annual Rain Fall: ${town.averageRainfall}`
      img.setAttribute ('src', `images/${town.photo}`);

      info.appendChild(h2);
      info.appendChild(motto);
      info.appendChild(year);
      info.appendChild(pop);
      info.appendChild(rain);
      card.appendChild(info);
      card.appendChild(img);

      document.querySelector("div.townInfo").appendChild(card);
    });
  });

 