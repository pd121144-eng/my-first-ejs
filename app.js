
// Import Express
const express = require("express");

// Create Express application
const app = express();

// Set EJS as the template engine
app.set("view engine", "ejs");

// Home page
app.get("/", (req, res) => {
    res.render("home");
});

// About page
app.get("/about", (req, res) => {
    res.render("about");
});

// Students page
app.get("/students", (req, res) => {

    // Initializing students array of objects
    const students = [
        { regno: "MX101", name: "Arun", CGPA: 8.5 },
        { regno: "MX102", name: "Meena", CGPA: 9.2 },
        { regno: "MX103", name: "Ravi", CGPA: 7.8 }
    ];

    // Passing students array to students.ejs
    res.render("students", { students });
});

// Start the server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
