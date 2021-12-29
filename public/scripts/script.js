import * as html from "./Module/html.js";


if (localStorage.getItem("user-name", "user-email", "user-pass", "icon" == true)) {

    var accountName = document.getElementById("account-name");
    var accountmail = document.getElementById("account-email");
    var accountdp = document.getElementById("dp")
    console.log(accountdp)
    accountName.innerHTML = `name: ${localStorage.getItem("user-name")}`
    accountmail.innerHTML = `email: ${localStorage.getItem("user-email")}`
    accountdp.src = localStorage.getItem("icon")

    var num = 0;


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function createBox(ar) {


        console.log(ar)
        var userTweetInput = document.getElementById("user-tweet-input").value;

        //body
        var allbody = document.createElement("div");
        allbody.className += "blog-user";
        document.body.appendChild(allbody);
        console.log(allbody)

        //tweet
        var tweet = new html.Edetail("tweet", allbody);
        console.log(tweet)
        tweet.Create_New("div");
        console.log(document.getElementsByClassName("tweet")[num])
        var tz = document.getElementsByClassName("tweet")[num];

        /******************************************************************** */
        //tweet:user-info&user-widget
        var userInfo = new html.Edetail("user-info", tz);
        var userWidget = new html.Edetail("user-widget", tz);
        //adding userInfo:div

        userInfo.Create_New("div");
        var userInfoBody = document.getElementsByClassName("user-info")[num];
        //adding userWidget:div

        userWidget.Create_New("div");
        var userWidgetBody = document.getElementsByClassName("user-widget")[num];
        console.log(userWidgetBody)

        //adding user-widget:tweet

        /*********************************************************************** */

        /************************************************************************ */

        //user-widget
        var userTweetZ = new html.Edetail("user-tweet", userWidgetBody);
        userTweetZ.Create_New("div", userTweetInput);
        let izx = document.getElementsByClassName("user-name")[num];



        /*********************************************************************** */
        //user-info

        var userImage = new html.Edetail("user-image-blog", userInfoBody);
        userImage.Add_img(localStorage.getItem("icon"));
        var userName = new html.Edetail("user-name-blog", userInfoBody);
        userName.Add_P(localStorage.getItem("user-name"));
        /************************************************************************ */



        console.log(`the number is in the function is ${num}`);



    }


    let btnAddz = document.getElementById("btnAdd");

    btnAddz.addEventListener("click", () => {
        createBox();
        num++;
        console.log(`the number is in the addEventListen is ${num}`);
    })
} else {
    window.location.href = "../login/index.html"

}


//function to add tweet