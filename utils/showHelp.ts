export function showHelp(args?: string[]) {
  if (args) {
    console.log(`Usage: npx ts-node cli.ts <${args?.join("> <")}>`);
    console.log(`       where <${args?.join("> <")}> are numbers`);
  } else {
    console.log("Usage: npx ts-node cli.ts");
  }
}
