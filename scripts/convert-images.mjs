import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

const publicDir = './public';

// Images to convert to WebP (large PNGs)
const imagesToConvert = [
  'Chuck-Norris-F.png',
  'Iraq-07-F.png', 
  'Luke-State-F.png',
  'Mongolia-F.png',
  'Navy-Ball-2-F.png',
  'BoysatState-F.png',
  'Seth-Myers-F.png',
  'WordsofWar-F.png',
  'social-media.png',
  'GEO-Feature.png',
  'GM-Logo.png',
  'YT-views.png',
  'YT2-Views-Channel.png',
  'blog-photo.png',
  'about-photo.png',
  '50BP.png',
  'NYT-1.png',
  'NYT-2.png',
  'Vogue.png'
];

async function convertToWebP(filename) {
  const inputPath = join(publicDir, filename);
  const outputPath = join(publicDir, filename.replace('.png', '.webp'));
  
  try {
    const info = await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    const originalStats = await stat(inputPath);
    const newStats = await stat(outputPath);
    
    const savings = ((originalStats.size - newStats.size) / originalStats.size * 100).toFixed(1);
    console.log(`✓ ${filename} -> ${filename.replace('.png', '.webp')}`);
    console.log(`  ${(originalStats.size/1024).toFixed(0)}KB -> ${(newStats.size/1024).toFixed(0)}KB (${savings}% smaller)`);
    
    return { original: originalStats.size, new: newStats.size };
  } catch (err) {
    console.error(`✗ Failed to convert ${filename}:`, err.message);
    return null;
  }
}

async function main() {
  console.log('Converting PNG images to WebP...\n');
  
  let totalOriginal = 0;
  let totalNew = 0;
  
  for (const img of imagesToConvert) {
    const result = await convertToWebP(img);
    if (result) {
      totalOriginal += result.original;
      totalNew += result.new;
    }
  }
  
  console.log('\n=====================================');
  console.log(`Total savings: ${(totalOriginal/1024/1024).toFixed(2)}MB -> ${(totalNew/1024/1024).toFixed(2)}MB`);
  console.log(`Reduced by: ${((totalOriginal - totalNew)/1024/1024).toFixed(2)}MB (${((totalOriginal - totalNew)/totalOriginal*100).toFixed(1)}%)`);
}

main();

