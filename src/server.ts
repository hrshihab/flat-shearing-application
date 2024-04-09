import app from "./app";
import { Server } from "http";
const port = 3000;

async function main() {
  const server: Server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

main();
