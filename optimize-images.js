import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');
const backupDir = path.join(__dirname, 'src', 'assets_backup');

// Create backup directory
if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir);
}

async function optimizeImages() {
    const files = fs.readdirSync(assetsDir);

    for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
            const filePath = path.join(assetsDir, file);
            const backupPath = path.join(backupDir, file);

            // Backup original
            if (!fs.existsSync(backupPath)) {
                fs.copyFileSync(filePath, backupPath);
            }

            console.log(`Optimizing ${file}...`);

            try {
                const image = sharp(filePath);
                const metadata = await image.metadata();

                // Resize if width is larger than 1920px
                if (metadata.width > 1920) {
                    await image.resize(1920).toBuffer().then(data => {
                        return sharp(data).jpeg({ quality: 80 }).toFile(filePath);
                    });
                } else {
                    await image.jpeg({ quality: 80 }).toFile(path.join(assetsDir, `temp_${file}`));
                    fs.renameSync(path.join(assetsDir, `temp_${file}`), filePath);
                }

                console.log(`✅ Optimized ${file}`);
            } catch (error) {
                console.error(`❌ Error optimizing ${file}:`, error);
            }
        }
    }
}

optimizeImages();
