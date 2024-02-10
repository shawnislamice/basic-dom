const sections = document.querySelectorAll("section"); //Need the section tag
for (const section of sections) {
  section.style.border = "2px solid red";
  section.style.margin = "5px";
  section.style.borderRadius = "15px";
  section.style.padding = "5px";
  section.style.backgroundColor = "green";
}
const placesContainer = document.getElementById("places-container");
for (let place of places) {
  
}
placesContainer.style.backgroundColor = "lightgray";
placesContainer.classList.add('text-center')
placesContainer.classList.remove('text-center')

let yellowColor=document.getElementById('places-container')
yellowColor.classList.add('yellow-bg')
