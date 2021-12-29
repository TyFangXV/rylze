var menu = document.querySelector(".accountz")
var accountActivate = document.getElementById("AccountActivation");
var account = document.getElementById("account");
var accountCbtn = document.getElementById("cancelBtnAccount");
var burger = document.getElementById("menu");
var addBox = document.getElementById("addBox");
var centerThing = document.getElementById("centerThing")

var counter = 0;
console.log(menu);
console.log(burger)

function display(el) {
    el.style.display = "block";
}

function noDisplay(el) {
    el.style.display = "none";
}

burger.addEventListener('click', () => {
    display(menu);
})


burger.addEventListener('click', () => {
    counter++;
    if (counter == 2) {
        menu.style.display = "none";
        counter = 0;

    }

    console.log(counter);
})

var cancelBtn = document.getElementById("cancelBtn");


accountActivate.addEventListener("click", () => {
    display(account);
})



cancelBtn.addEventListener("click", () => {
    noDisplay(centerThing);
    display(addBox);
})


addBox.addEventListener('click', () => {
    display(centerThing);
    noDisplay(addBox)
})

accountCbtn.addEventListener('click', () => {
    noDisplay(account);
    console.log("hi")
})