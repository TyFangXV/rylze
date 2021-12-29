class Edetail {
    constructor(className, bodyLocation) {
        this.location = bodyLocation;
        this.class = className;
    }

    Add_div() {
        var div = document.createElement("div");
        div.className += this.class;
        div.appendChild(this.location);


    }


    Add_P(text) {
        var p = document.createElement("p");
        p.className += this.class;
        p.innerHTML = text;
        this.location.appendChild(p);
    }





    Add_img(path) {
        //makes the img element 
        var img = document.createElement("img");
        //adds className to the element
        img.className += this.class;
        //sets src attr to the element 
        img.setAttribute('src', path)
        //appends the  img to the location
        this.location.appendChild(img);



    }





    Create_New(name, text) {

        /****************************************************************************** */

        //checks whether there is a input for the element
        if (text == undefined) {
            //first makes the element
            let em = document.createElement(name);
            //then append that element to the location
            this.location.appendChild(em);
            //add the class for the element
            em.className += this.class;
            //then logs out the element 

        }
        //if yes it will  make the element with the input for the number
        else {

            //creats the element
            let em = document.createElement(name);
            //class name
            em.className += this.class;
            //adds the input the element 
            em.innerHTML = text;
            //append the element to the body
            this.location.appendChild(em);
            //logs out the element

        }

    }


    Add_Video(w, h, videoLink) {
        //default inputs for the parameters
        let width = w;
        let height = h;

        //add's the iframe
        document.Create_New("iframe");
        this.location.appendChild(document.getElementsByTagName("iframe" [0]));

        //link split
        let link = videoLink;
        let linkN = link.split("=");


        //variable for the iframe
        let iframe = document.getElementsByTagName("iframe")[0];

        //styling for iframe
        iframe.style.width = width || "360px";
        iframe.style.height = height || "500px";

        //sets the  src attr for iframe
        iframe.setAttribute("src", `https://www.youtube.com/embed/${linkN[1]}`);

        //set the frameborder
        iframe.setAttribute("frameborder", "0");

        //sets the default attr
        iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture")

        //varaible for fullscreen
        let fullscreen = document.createAttribute("allowfullscreen");

        //sets the fullscreen for the video
        iframe.setAttributeNode(fullscreen)


    }

}



export {
    Edetail
};