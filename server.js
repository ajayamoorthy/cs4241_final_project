const express = require( 'express' ),
      port = 3000;

const app = express();
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.redirect("/index.html");
})

app.listen(port, () => {
    console.log(`Cocktail Combo listening on port ${port}`);
})