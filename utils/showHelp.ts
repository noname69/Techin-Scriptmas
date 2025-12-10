export function showHelp(args: string[]) {
  console.log(`Usage: npx ts-node cli.ts <${args.join("> <")}>`);
  console.log(`       where <${args.join("> <")}> are numbers`);
}
