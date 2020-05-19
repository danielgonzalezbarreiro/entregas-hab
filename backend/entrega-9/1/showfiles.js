const path = require("path");
const fs = require("fs").promises;


async function showFile(filePath) {
  console.log("processing", filePath);

  try {
    const absolutePath = path.resolve(filePath);
    const info = await fs.stat(absolutePath);

    if (!info.isFile()) {
      throw new Error("Path is not a file")
    }

    if (!info.size > 10000) {
      throw new Error("File is heavy than 10000")
    }

    const content = await fs.readFile(absolutePath);

    return console.log(`File content: ${content.toString()}`);
  } catch (error) {
    console.error(error.message);
  }
}

async function main() {
  const arguments = process.argv.slice(2);
  for (const argument of arguments) {
    const content = await showFile(argument);
    if (content) console.log(content);
  }
}

main();