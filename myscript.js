function display()
{
var a = document.getElementById("num1").value;
var b = document.getElementById("num2").value;
var c =parseFloat(a)+parseFloat(b);
document.getElementById("ans").innerHTML=c;
}