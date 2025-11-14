const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li");
const newText = document.createTextNode("Logout");
newLi.appendChild(newText);

const ul = navDiv.querySelector("ul");
ul.appendChild(newLi);

console.log("First link:", ul.firstElementChild.textContent);
console.log("Last link:", ul.lastElementChild.textContent);
