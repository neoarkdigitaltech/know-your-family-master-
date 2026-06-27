const { removeBackground } = require('@imgly/background-removal-node');
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
                console.log(`Processing ${filename} with AI...`);
                // Convert Windows path to file:// URL
                const fileUrl = 'file:///' + filePath.replace(/\\/g, '/');
                const blob = await removeBackground(fileUrl);
                const buffer = Buffer.from(await blob.arrayBuffer());
                
                fs.writeFileSync(filePath, buffer);
                console.log(`Saved AI transparent ${filename}`);
            } catch (err) {
                console.error(`Error processing ${filename}:`, err);
            }
        } else {
            console.log(`File not found: ${filePath}`);
        }
    }
}

processImages().then(() => console.log('Done processing images.'));
