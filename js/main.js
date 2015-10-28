document.getElementById("click me text").addEventListener("click", myFunction);

var x=0;
function myFunction() {
    x= x+1;
    document.getElementById("hidden").innerHTML = "This is click number " + x;
}
