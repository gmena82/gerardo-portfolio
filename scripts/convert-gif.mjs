import sharp from 'sharp';
import { stat } from 'fs/promises';

// Extract first frame of GIF and convert to WebP
async function convertGifToWebP() {
  const inputPath = './public/DP-2.gif';
  const outputPath = './public/DP-2.webp';
  
  try {
    // Extract first frame and convert to WebP
    await sharp(inputPath, { pages: 1 }) // pages: 1 = first frame only
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    const originalStats = await stat(inputPath);
    const newStats = await stat(outputPath);
    
    console.log(`✓ DP-2.gif -> DP-2.webp (static image)`);
    console.log(`  ${(originalStats.size/1024/1024).toFixed(2)}MB -> ${(newStats.size/1024).toFixed(0)}KB`);
    console.log(`  Note: Animation removed. To restore animation, manually convert GIF to MP4 using:`);
    console.log(`  ffmpeg -i DP-2.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" DP-2.mp4`);
  } catch (err) {
    console.error('Failed:', err.message);
  }
}

convertGifToWebP();

