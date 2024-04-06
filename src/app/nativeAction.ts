"use server";
import fs from "fs";
import path from "path";

function getFilesFromDirectory(directoryPath: string): string[] {
  return fs.readdirSync(directoryPath).filter((file) => {
    return fs.statSync(path.join(directoryPath, file)).isFile();
  });
}

export async function run() {
  const files = getFilesFromDirectory("/tmp");
  console.log(files);
}
