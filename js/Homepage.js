// Virain Bawa
// ICS 4U0
// October 7 2019
// ReachIt 

// a variable to store the search information in
// a function to retrieve the search value and compare to database
/*
let input = document.getElementById("myInput");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});


function searchFunction() {
    var search = document.getElementById("myInput").value;
    // temporary method to make sure the function is retrieveing the values
    alert('The Search was ' + search);
    // compare values to database after database is set up, temporary replacement is local storage
    localStorage.setItem('searchItem', JSON.stringify(search));
        location.replace("https://www.w3schools.com");
};
*/

let input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});

function myFunction() {
    let search = document.getElementById("myInput").value;
    alert('The Search was ' + search);
        localStorage.setItem('searchItem', JSON.stringify(search));
        location.replace("https://www.w3schools.com");
    };
