var r1 = document.getElementById('r1')
var r2 = document.getElementById('r2')
var r3 = document.getElementById('r3')

function calc(){

var ra = (r1 .value * r3.value)/(parseInt(r1.value) + parseInt(r2.value) + parseInt(r3.value));
var rb = (r1 .value * r2.value)/(parseInt(r1.value) + parseInt(r2.value) + parseInt(r3.value));
var rc = (r2 .value * r3.value)/(parseInt(r1.value) + parseInt(r2.value) + parseInt(r3.value));
console.log(ra)
console.log(rc)
document.getElementById('ra').innerHTML = ra;
document.getElementById('rb').innerHTML = rb;
document.getElementById('rc').innerHTML = rc;
}