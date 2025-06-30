/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
const myToggle = document.getElementById('my-toggle')

function myFunction() {
  console.log(myToggle)
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

myToggle.addEventListener('click', myFunction)