const express = require("express");
const {
    getWeather
} = require("./getWeather");
const PORT = process.env.PORT || 1738;

const app = express();
//REQUEST BODY PARSER
app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.post("/fullfillment", (req, res) => {
    getWeather(req.body.queryResult.parameters.param)
        .then(result =>
            res.send({
                fulfillmentText: result
            })
        )
        .catch(err => console.log(err))
        .finally(() => console.log("Hurray"));
});
app.listen(PORT, () => {
    console.log(`Server @ http://localhost:${PORT}/fullfillment`);
});