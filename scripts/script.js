// Example 1
function mouseOver(obj) {
    obj.innerHTML = "Thank You"
}

function mouseOut(obj) {
    obj.innerHTML = "Mouse Over Me"
}

// Example 2
function onImageClick(){
    document.getElementById("image").src = "images/bunnys.jpg";
}

// Example 3
function keydownFunction() {
    document.getElementById("demo").style.backgroundColor = "red";
}

function keyupFunction() {
    document.getElementById("demo").style.backgroundColor = "green";
}