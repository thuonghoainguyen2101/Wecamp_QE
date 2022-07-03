//

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello";

//
let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "./img/firefox.png") {
        myImage.setAttribute("src", "./img/cuteimg.jpg");
    } else {
        myImage.setAttribute("src", "./img/firefox.png");
    }
};

let myName = prompt("Enter Your name");
function changeName() {
    localStorage.setItem("name", myName);
    alert("Hello" + localStorage.getItem("name"));
}

if (!localStorage.getItem("name")) {
    changeName();
}
