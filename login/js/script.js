if (localStorage.getItem("user-name", "user-email", "user-pass")) {
    window.location.href = "../public/index.html";
    console.log("logged in ");
} else {
    console.log(" not logged in ");

    function active() {
        var publicUserName = document.getElementById("name").value;
        var privateUserEmail = document.getElementById("email").value;
        var privateUserPass = document.getElementById("password").value;
        var publicUserIcon = document.getElementById("icon").value;
        var db = localStorage;

        db.setItem("user-name", publicUserName);
        db.setItem("user-email", privateUserEmail);
        db.setItem("user-pass", privateUserPass);
        if (publicUserIcon == "fox") {
            db.setItem("icon", "./image/fox.png")
        }
        if (publicUserIcon == "wolf") {
            db.setItem("icon", "./image/wolf.png")
        }
        if (publicUserIcon == "lion") {
            db.setItem("icon", "./image/lion.png")
        }
        if (publicUserIcon == "tiger") {
            db.setItem("icon", "./image/tiger.png")
        }

        window.location.href = "../public/index.html";
    }
}