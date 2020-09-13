function myFunction() {
  var x = document.getElementById("myLinks");
  var logo = document.getElementById("mobile-logo");
  if (x.style.display === "block") {
    x.style.display = "none";
    logo.style.display = "block";
  } else {
    x.style.display = "block";
    logo.style.display = "none";
  }
}