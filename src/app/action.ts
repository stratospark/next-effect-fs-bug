"use server";
import { FileSystem } from "@effect/platform";
import { NodeFileSystem } from "@effect/platform-node";
import { Effect } from "effect";

const prog = Effect.gen(function* (_) {
  const fs = yield* _(FileSystem.FileSystem);
  const files = yield* _(fs.readDirectory("/tmp"));
  files.forEach((file) => console.log(file));
});

export async function run() {
  const out = await Effect.runPromise(
    Effect.provide(prog, NodeFileSystem.layer)
  );
  console.log(out);
}
