// Express app and middleware setup

// importing express
const express = require('express');      // require("express") - Express framework import karta h
const cors = require('cors');            // require("cors") - Frontend aur backend ke beech communication allow krta h

const app = express();          // express() - Express application create karta h aur uska naam "app" rakha h

// Middlewares - client ki request aur server ke response ke beech mein kaam karta hai.
app.use(cors());            // app.use(cors()) - CORS middleware enable krta h
app.use(express.json());    // express.json() - JSON request data read krne deta h

// Home
app.get("/home", (request, response) => {                        // app.get() - GET API route create krta h
    response.send("Welcome to Parcel Mate Backend!");    // res.send() - Rresponse bhej rha h
});

//parcel naam ka get route create krna h jismein parcel ka data milega
app.get("/parcels", (request, response) => {                        
    response.send("Your Parcel will be delivered on time!");   
});

// Health check
app.get("/api/health", (request, response) => {
    response.json({          // res.json() - JSON response bhejta h
        success: true,
        message: "Parcel Mate API is running!"
    });
});

module.exports = app;     // module.exports - App ko doosri files mein use krne deta h