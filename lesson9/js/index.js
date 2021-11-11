

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const prophets = jsonObject["towns"];
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let h3 = document.createElement("h3");
      let year = document.createElement("p");
      let pop = document.createElement("p");
      let rain = document.createElement("p");

      h2.textContent = towns[i].name;
      h3.textContent = towns[i].motto;
      year.textContent = towns[i].yearfounded;
      pop.textContent = towns[i].currentPopulation;
      rain.textContent = towns[i].averageRainfall;

      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(year);
      card.appendChild(pop);
      card.appendChild(rain);

      document.querySelector("div.cards").appendChild(card);
    }
  });