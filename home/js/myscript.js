function myFunction() {
  document.getElementById("demo").innerHTML = "Helloo!!!";
}

function myFunction2() {
  const element = document.getElementsByTagName("content");
  document.getElementById("demo").innerHTML = 'My Personal Website ' + element[0].innerHTML;

}