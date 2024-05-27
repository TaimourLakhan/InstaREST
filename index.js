const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`app is listening at the port ${port}`);
})

app.set("views", path.join(__dirname, "views"));

// Now am try yo make instagram clone using ejs express and rest apis 

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "images")));

// now making the home insta page then making the link in it let see 


let essentials = {
    caption: "Chillin in Mountains",
    Likes: "24",
    Comments: "15",
    Followings: "100",
    Followers: "2334"
}

app.get("/Home/Taimour", (req, res) => {
    res.render("home.ejs", { essentials });
})
