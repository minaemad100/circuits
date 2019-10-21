var r1 = document.getElementById('r1')
var r2 = document.getElementById('r2')
var r3 = document.getElementById('r3')

function calc(){

var r12 = parseFloat(r1.value)+parseFloat(r2.value)+parseFloat((r1.value*r2.value)/r3.value);
var r23 = parseFloat(r3.value)+parseFloat(r2.value)+parseFloat((r3.value*r2.value)/r1.value);
var r31 = parseFloat(r1.value)+parseFloat(r3.value)+parseFloat((r1.value*r3.value)/r2.value);

document.getElementById('r12').innerHTML = r12;
document.getElementById('r23').innerHTML = r23;
document.getElementById('r31').innerHTML = r31;
}
