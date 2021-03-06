require("dotenv").config(".env");
const server = require("./server");

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`\n=== API listening on port ${PORT} ===\n`);
});