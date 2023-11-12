function init(){
//add your javascript between these two lines of code

var d1 = document.getElementById('entrybutton');
function myEventFunction(){
    var name = document.querySelector("h2").textContent;
    var inp = document.getElementById("entryinput").value;
    alert(name + ": " +inp);

    var d2 = document.getElementById('textoutput');
    d2.innerHTML = inp;
}

d1.addEventListener('click', myEventFunction);
setAttribute()




}
window.addEventListener('load', init);
