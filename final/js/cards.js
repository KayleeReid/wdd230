const requestURL =
  "directory.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const businesses = jsonObject["businesses"];
    for (let i = 0; i < businesses.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let dob = document.createElement("p");
      let pob = document.createElement("p");
      let img = document.createElement("img");

      h2.textContent = businesses[i].businessname 
      dob.textContent = businesses[i].birthdate;
      pob.textContent = businesses[i].birtplace;
      img.setAttribute("src", businesses[i].imageurl);

      card.appendChild(h2);
      card.appendChild(dob);
      card.appendChild(pob);
      card.appendChild(img);

      document.querySelector("div.cards").appendChild(card);
    }
  });
