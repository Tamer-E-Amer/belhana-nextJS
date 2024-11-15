import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = path.join(process.cwd(), "public/assets/icons"); // Adjust path based on location
const outputDir = path.join(process.cwd(), "public/assets/icons/optimized"); // Adjust path based on location

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Process each file in the input directory
fs.readdirSync(inputDir).forEach((file) => {
  const inputFile = path.join(inputDir, file);
  const outputFile = path.join(outputDir, `${path.parse(file).name}.webp`);

  sharp(inputFile)
    // .resize(800, 600) // Resize to 800x600
    .webp({ quality: 80 }) // Convert to WebP format with quality 80
    .toFile(outputFile)
    .then(() => console.log(`Optimized: ${file}`))
    .catch((err) => console.error(`Error optimizing ${file}:`, err));
});
