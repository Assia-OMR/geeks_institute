//____________________//
/* Exercice 5: Users */
//___________________//


// Retrieve the div and console.log it
const div = document.getElementById("container");
console.log(div);

// Change the name “Pete” to “Richard”
const firstUl = document.querySelectorAll(".list")[0];
firstUl.children[1].textContent = "Richard";

// Delete the second <li> of the second <ul>
const secondUl = document.querySelectorAll(".list")[1];
secondUl.children[1].remove(); // removes "Sarah"

// Change the name of the first <li> of each <ul> to your name
document.querySelectorAll(".list li:first-child").forEach(li => {
  li.textContent = "Assia";
});

// Add a class called student_list to both of the <ul>'s
document.querySelectorAll(".list").forEach(ul => {
  ul.classList.add("student_list");
});

// Add the classes university and attendance to the first <ul>
firstUl.classList.add("university", "attendance");

// Add a “light blue” background color and some padding to the <div>
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";

// Do not display the <li> that contains “Dan”
document.querySelectorAll("li").forEach(li => {
  if (li.textContent === "Dan") {
    li.style.display = "none";
  }
});

// Add a border to the <li> that contains “Richard”
document.querySelectorAll("li").forEach(li => {
  if (li.textContent === "Richard") {
    li.style.border = "1px solid black";
  }
});

// Change the font size of the whole body
document.body.style.fontSize = "18px";

// Bonus: If the background color is “light blue”, alert “Hello x and y”
if (div.style.backgroundColor === "lightblue") {
  const allUsers = document.querySelectorAll(".list li:first-child");
  const user1 = allUsers[0].textContent;
  const user2 = allUsers[1].textContent;
  alert(`Hello ${user1} and ${user2}`);
}
