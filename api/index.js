const express = require("express");
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");

const app = express();

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerJsdoc({
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Harry Potter API!",
        version: "0.1.0",
        description: "The database of Harry Potter movies all houses and spells. With a single /Get command you are able to fetch the Hogwarts Houses. It also allows you to fetch all the spells performed in the Harry Potter season. Besides that, you can add new spells and also delete them. There's also a comments section were you, with the /Get command, can fetch all the comments and like the spells, you cand add and delete new comments. The function of add and delete is only available when you're logged in. Additionaly, you can create, delete and get all the favorite characters of the user.",
      },
      servers: [
        {
          url: "http://localhost:3001/v1",
        },
      ]
    },
    apis: ["api/controllers/spells.js", "api/controllers/spell.js","api/controllers/houses.js", "api/controllers/house.js", "api/controllers/comments.js", "api/controllers/comment.js", "api/controllers/favorites.js", "api/controllers/favorite.js"],
  }))
);

app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }))
app.use(bodyParser.json());
app.use("/v1/spells",
  require("./controllers/spells"),
  require("./controllers/spell")
);
app.use("/v1/houses",
  require("./controllers/house"),
  require("./controllers/houses")
);
app.use("/v1/comments",
  require("./controllers/comment"),
  require("./controllers/comments")
);
app.use("/v1/favorites",
  require("./controllers/favorite"),
  require("./controllers/favorites")
);

app.listen(3001, () => console.log("Servidor a funcionar!"));