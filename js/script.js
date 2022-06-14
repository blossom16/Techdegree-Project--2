/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
//function with parameters list & page
function showPage (list, page) {
//two variables to store start index & end indexx
startIndex = (page * 9) - 9;
endIndex = page * 9;

//selecting UL element with class student-list, element will be used to add student data to.
const studentList = document.querySelector (".student-list");

//setting innerHTML property of the studentList variable to empty string 
//this removes existing students that might have been previously displayed
studentList.innerHTML = "";

//for loop that will run for each object in the list of students
// adds name, registered date, and picture for each student

for  (let i = 0; i < list.length; i++) {
   if (i >= startIndex && i < endIndex) {

   let studentItem = `
   <li class="student-item cf">
   <div class="student-details">
     <img class="avatar" src="${list[i].picture.medium}" " alt="Profile Picture">
     <h3>${list[i].name.first} ${list[i].name.last}</h3>
     <span class="email">${list[i].email}</span>
   </div>
   <div class="joined-details">
     <span class="date">${list[i].registered.date}</span>
   </div>
 </li>
`;
//to insert it into the DOM, inside the element after it's last child.
studentList.insertAdjacentHTML ("beforeend", studentItem);
      }
   }
}


//creates and inserts/appends the elements needed to display a "page" of nine students

showPage (data, 1);



//This function will create and insert/append the elements needed for the pagination buttons


function addPagination (list) {

const numOfPages = Math.ceil (list.length / 9);//calculates # of pages needed
const linkList = document.querySelector(".link-list");//element we add pagination buttons to
linkList.innerHTML = " " ; //removes any previous pagination buttons

for (let i = 1; i <= numOfPages; i++) {
   //DOM element needed to create the pagination button 
   let button = ` 
<li>
  <button type="button">${[i]}</button>
</li>
`;
//inserts element into the DOM
linkList.insertAdjacentHTML ("beforeend", button);
//adds the active class to the first button
let firstButton= document.querySelector ("li button");
//adds the active class to the first button
firstButton.className = "active";

}
//When there's a click event, this targets an element with the tagName BUTTON
linkList.addEventListener ("click", (e)=>  {

//checks if a BUTTON element is clicked
//switches button to active when clicked 
if (e.target.tagName === "BUTTON") {
   
  let activeButton = document.querySelector(".active"); 
  activeButton.className = ""; 
  e.target.className = "active";
  showPage(list, e.target.textContent);

}


});

}
//calls the addPagination function
addPagination (data);




// Call functions
