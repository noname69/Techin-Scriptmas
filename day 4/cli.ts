/**
 * Function to show help message
 */
function showHelp() {
  console.log("Usage:");
  console.log("   npx ts-node cli.ts <numbers>");
  console.log("Where <numbers> are numbers seperated by space");
}

// Get command line arguments
const args = process.argv.slice(2);

try {
} catch (error) {
  if (error instanceof Error) {
    console.error("Error:", error.message);
    showHelp();
  } else {
    console.error("Enexpected error occurred.");
  }
  process.exit(1);
}
