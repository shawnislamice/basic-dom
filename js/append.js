console.log("Append JS");
const placesLists = document.getElementById("places-list");
// console.log(placesLists)
const li = document.createElement("li");
li.innerText = "Chandpur";

placesLists.appendChild(li);
//Where to add
const mainContent = document.getElementById("main-content");
// console.log(mainContent)

//What to add
const section=document.createElement('section')
const h1=document.createElement('h1')
h1.innerText="MY Food List"
section.appendChild(h1)
const ul=document.createElement('ul')
const li1=document.createElement('li')
li1.innerText="Biriyani"
ul.append(li1)
const li2=document.createElement('li')
li2.innerText="Borhani"
ul.append(li2)
const li3=document.createElement('li')
li3.innerText="Salad"
ul.append(li3)
section.append(ul)
mainContent.append(section)

//Set innerHTML Directly
const sectionDress=document.createElement('section')
sectionDress.innerHTML=`
<h1>MY Dress Section</h1>
<ul>
    <li>Shirts</li>
    <li>Lungi</li>
    <li>Shirts</li>
</ul>
`
mainContent.append(sectionDress)