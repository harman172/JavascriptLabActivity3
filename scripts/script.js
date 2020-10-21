// Example 1
function mouseOver(obj) {
    obj.innerHTML = "Thank You"
}

function mouseOut(obj) {
    obj.innerHTML = "Place mouse Over Me"
}

// Example 2
function onImageClick(){
    document.getElementById("image").src = "images/bunnys.jpg";
}

// Example 3
function keydownFunction() {
    document.getElementById("demo").style.backgroundColor = "#6df1f0";
}

function keyupFunction() {
    document.getElementById("demo").style.backgroundColor = "green";
}