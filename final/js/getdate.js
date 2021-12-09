const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();

const date = new Date(Date.now());

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
document.querySelector("#cDate").textContent = date.toLocaleDateString(
  "en-UK",
  options
);
