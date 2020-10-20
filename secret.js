
function code() {
    var str = document.getElementById("str");
    str = str.value.replace(" ","");
    var n = "";
    for (let i = 0; i< str.length; i++) {
        n += str.charCodeAt(i) + " ";}
    document.getElementById("demo").innerHTML = n;
  }
  
  function decode() {
    var str = document.getElementById("str");
    str = str.value.split(" ");
    var n = "";
    for (let i = 0; i< str.length; i++) {
        n += String.fromCharCode(str[i]) + " ";}
    document.getElementById("demo").innerHTML = n;
  }