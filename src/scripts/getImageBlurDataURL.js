import sharp from "sharp";
import fs from "fs";

export async function getImageBlurDataURL(imageName) {
  const imagePath = `public/assets/imgs/optimized/${imageName}`;

  try {
    const imageBuffer = await fs.promises.readFile(imagePath);
    const blurredImageBuffer = await sharp(imageBuffer)
      .blur(10) // Adjust blur radius as needed
      .toBuffer();

    const blurDataURL = `data:image/jpeg;base64,${btoa(
      blurredImageBuffer.toString("binary")
    )}`;

    return blurDataURL;
  } catch (error) {
    console.error("Error loading or processing image:", error);
    return null;
  }
}
