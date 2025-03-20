const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, 'src')));

// Needed for the client-side routing to work when refreshing the page
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
