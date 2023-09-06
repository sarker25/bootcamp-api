require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 3000;
const http = require("http");
const { connect } = require("./src/db/connect");

const server = http.createServer(app);

(async () => {
  await connect();
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})();
