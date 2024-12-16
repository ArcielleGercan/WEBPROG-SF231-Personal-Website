function myFunction() {
  document.getElementById("demo").innerHTML = "Helloo!!!";
}

function myFunction2() {
  const element = document.getElementsByTagName("content");
  document.getElementById("demo").innerHTML = 'The text in first paragraph (index 0) is: ' + element[0].innerHTML;

}