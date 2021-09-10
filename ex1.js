 let entireBody = document.getElementById('body');
 entireBody.style.backgroundColor = "white";
    console.log("white");
 let onebutton = document.getElementById('red');   
 let twobutton = document.getElementById('green');   
 let threebutton = document.getElementById('blue');   
 
 // event listener - RED
 onebutton.addEventListener("mouseover", () => {
 entireBody.style.backgroundColor = "red"
    console.log('red');
 });
 // event listener - GREEN
 twobutton.addEventListener("mouseover", () => {
 entireBody.style.backgroundColor = "green"
    console.log('green');
 });
 // event listener - BLUE
 threebutton.addEventListener("mouseover", () => {
 entireBody.style.backgroundColor = "blue"
    console.log('blue');
 });