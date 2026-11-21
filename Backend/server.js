// Backend server start krna 

require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Parcel Mate server running on port ${PORT}`);
});