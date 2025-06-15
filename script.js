function isPositiveNumber(str) {
    let num = Number(str);
    return !isNaN(num) && num >= 0;
}

function volume_sphere(event) {
    //Write your code here
	 event.preventDefault(); 
	let ans = NaN;
	let radius =document.getElementById('MyForm')["radius"].value;
  if(isPositiveNumber(radius)){
	  ans = (4 / 3) * Math.PI * Math.pow(radius, 3);
  }
	let b = document.getElementById('MyForm')["volume"];
	b.value = ans;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
