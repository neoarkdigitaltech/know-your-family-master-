const { Jimp } = require("jimp");
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'images');
const imagesToProcess = [
    'gopuram-hero.png',
    'toran-main.png',
    'diya.png',
    'kolam-corner.png',
    'thamboolam.png',
    'horse-accent.png',
    'yali-bg.png'
];

async function processImages() {
    for (const filename of imagesToProcess) {
        const filePath = path.join(imagesDir, filename);
        if (fs.existsSync(filePath)) {
            try {
                console.log(`Processing ${filename}...`);
                const image = await Jimp.read(filePath);
                
                image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
                    // Get RGBA values
                    const red = this.bitmap.data[idx + 0];
                    const green = this.bitmap.data[idx + 1];
                    const blue = this.bitmap.data[idx + 2];
                    
                    // Check if pixel is white or near-white
                    // The images might have a slightly off-white background due to JPG compression
                    // Also some images might have a transparent grid pattern, so we check if it's very light gray
                    if (red > 230 && green > 230 && blue > 230) {
                        this.bitmap.data[idx + 3] = 0; // Set alpha to 0 (transparent)
                    }
                });
                
                await image.write(filePath);
                console.log(`Saved transparent ${filename}`);
            } catch (err) {
                console.error(`Error processing ${filename}:`, err);
            }
        } else {
            console.log(`File not found: ${filePath}`);
        }
    }
}

processImages().then(() => console.log('Done processing images.'));
